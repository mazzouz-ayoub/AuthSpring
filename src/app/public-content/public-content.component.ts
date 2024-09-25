import { Component } from '@angular/core';
import {Message} from "../message";
import {MyHttpService} from "../my-http.service";


@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrl: './public-content.component.css'
})
export class PublicContentComponent {
  content : string ="";

  constructor(private  http: MyHttpService) {}


  ngOnInit():void {
    this.http.getPrivate("/public/messages").subscribe((data:Message) => {
      this.content = data.message ;
      }

    );
  }

}
