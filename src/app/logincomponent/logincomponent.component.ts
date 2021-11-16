import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  userName:string='';
  password:string='';
  loginForm:FormGroup=new FormGroup({});

  constructor() { }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })
  }

  loginFun(){
   
      if(this.loginForm.get("userName")?.value=="admin" && this.loginForm.get("password")?.value=="admin"){
        

      }

  }
}
