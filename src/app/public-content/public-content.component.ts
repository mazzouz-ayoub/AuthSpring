import { Component } from '@angular/core';
import { MyHttpService } from "../my-http.service";

@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrls: ['./public-content.component.css']
})
export class PublicContentComponent {
  content: string = "";

  constructor(private http: MyHttpService) {}

  ngOnInit(): void {
    this.http.get("/public/messages").subscribe(
      (data: any) => {
        this.content = data.message;
      },
      (error) => {
        console.error('Erreur lors de la récupération des messages publics :', error);
        alert(`Erreur: ${error.status} - ${error.message}`);
      }
    );
  }
}
