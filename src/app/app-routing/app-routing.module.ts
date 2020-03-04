
import { InitialpageComponent } from './../initialpage/initialpage.component';
import { LoginPageComponent } from './../login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondComponent } from '../second/second.component';
const routes: Routes= [{path: '', pathMatch: 'full', redirectTo: 'initial'},{path: 'login', component: LoginPageComponent},{path: 'initial', component: InitialpageComponent},{path: 'second', component: SecondComponent}];


@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents =[LoginPageComponent, InitialpageComponent,SecondComponent]
