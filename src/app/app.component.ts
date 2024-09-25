import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyHttpService} from "./my-http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componentToShow : string = "public" ;

  constructor(private http: MyHttpService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['code'] !== undefined) {
        this.http.getToken(params['code']).subscribe((result: boolean) => {
          if (result === true) {
            this.componentToShow = 'private';
          } else {
            this.componentToShow = 'public';
          }
        });
      }
    });
  }
}


