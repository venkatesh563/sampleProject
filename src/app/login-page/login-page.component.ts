import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  name = new FormControl('',Validators.required);
  constructor() { }

  ngOnInit() {
  }
    
    updateValue()
    {
      console.log(this.name.errors);
      //this.name.setValue('test');
    }
  

}
