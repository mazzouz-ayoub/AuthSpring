import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "../my-http.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'] // Correction ici
})
export class LoginFormComponent implements OnInit {
  url: string = "";

  constructor(private http: MyHttpService) {}

  ngOnInit(): void {
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
