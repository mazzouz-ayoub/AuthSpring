import { Component } from '@angular/core';
import { Message } from "../message";
import { MyHttpService } from "../my-http.service";

@Component({
  selector: 'app-private-content',
  templateUrl: './private-content.component.html',
  styleUrls: ['./private-content.component.css'] // Correction ici
})
export class PrivateContentComponent {
  content: string = "";

  constructor(private http: MyHttpService) {}

  ngOnInit() {
    this.http.getPrivate("/messages").subscribe(
      (data: Message) => {
        this.content = data.message;
      },
      (error) => {
        console.error('Erreur lors de la récupération des messages privés :', error);
        alert(`Erreur: ${error.status} - ${error.message}`);
      }
    );
  }
}
