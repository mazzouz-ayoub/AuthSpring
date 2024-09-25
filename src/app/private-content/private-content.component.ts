import { Component } from '@angular/core';
import {Message} from "../message";
import {MyHttpService} from "../my-http.service";
@Component({
  selector: 'app-private-content',
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.css'
})
export class PrivateContentComponent {
  content : string = "" ;
  constructor(private  http:MyHttpService) {}
  ngOnInit(){
    this.http.getPrivate("/messages").subscribe((data:Message)=> {
      this.content = data.message
    })
  }
}
