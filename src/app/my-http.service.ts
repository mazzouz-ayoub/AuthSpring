import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Mise à jour de l'interface pour correspondre à la réponse de l'API
interface TokenResponse {
  Token: string; // Changez ceci pour `Token` avec une majuscule
}

@Injectable({
  providedIn: 'root',
})
export class MyHttpService {
  private readonly tokenKey = 'access_token'; // Clé pour stocker le token
  private token: string = ""; // Initialisation du token

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem(this.tokenKey) || "";
    console.log('Token récupéré du localStorage : ', this.token);
  }

  private setToken(token: string): void {
    this.token = token;
    localStorage.setItem(this.tokenKey, token);
    console.log('Token stocké dans localStorage : ', this.token);
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.token ? `Bearer ${this.token}` : '',
    });
  }

  get(url: string): Observable<any> {
    return this.http.get(`http://localhost:8080${url}`, { headers: this.createHeaders() });
  }

  getPrivate(url: string): Observable<any> {
    console.log('Token utilisé pour les requêtes privées : ', this.token);
    return this.http.get(`http://localhost:8080${url}`, { headers: this.createHeaders() }).pipe(
      catchError(error => this.handleError(error, 'Erreur lors de la récupération des données privées'))
    );
  }

  getToken(code: string): Observable<boolean> {
    return this.http.get<TokenResponse>(`http://localhost:8080/auth/callback?code=${code}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<TokenResponse>) => {
          console.log('Réponse de l\'API : ', response);
          // Vérification de la clé `Token` au lieu de `token`
          if (response.status === 200 && response.body?.Token) {
            this.setToken(response.body.Token); // Utilisez `Token` ici
            console.log('Token récupéré : ', this.token);
            return true;
          } else {
            console.error('Token invalide ou manquant dans la réponse.');
            return false;
          }
        }),
        catchError(error => {
          console.error('Erreur lors de la récupération du token : ', error);
          return of(false); // Retourne un Observable émettant false
        })
      );
  }

  logout(): void {
    this.token = "";
    localStorage.removeItem(this.tokenKey);
    console.log('Utilisateur déconnecté, token supprimé du localStorage.');
  }

  isTokenValid(): boolean {
    const isValid = this.token !== "";
    console.log(isValid ? 'Token valide : ' + this.token : 'Aucun token valide trouvé.');
    return isValid;
  }

  private handleError(error: any, context: string): Observable<boolean> {
    console.error(`${context}: `, error);
    return of(false); // Retourne un Observable émettant false
  }
}
