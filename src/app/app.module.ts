import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import  { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InitialpageComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
