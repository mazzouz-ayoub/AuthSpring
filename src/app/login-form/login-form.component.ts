import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "../my-http.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  url: string = "";
  errorMessage: string = ""; // Pour afficher les messages d'erreur

  constructor(private http: MyHttpService, private router: Router) {}

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      this.handleAuthCallback(code);
    } else {
      this.http.get("/auth/url").subscribe(
        (data: any) => {
          this.url = data.url;
        },
        (error: any) => {
          console.error("Erreur lors de la récupération de l'URL d'authentification :", error);
        }
      );
    }
  }

  handleAuthCallback(code: string): void {
    this.http.getToken(code).subscribe(success => {
      if (success) {
        console.log("Token récupéré avec succès");
        this.router.navigate(['/']); // Remplacez '/home' par la route souhaitée
      } else {
        this.errorMessage = "Échec de la récupération du token. Veuillez réessayer.";
        console.error("Échec de la récupération du token");
      }
    });
  }
}
