import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { PrivateContentComponent } from './private-content/private-content.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import{RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PublicContentComponent,
    PrivateContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule.forRoot([]),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Replacing HttpClientModule with new API
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
