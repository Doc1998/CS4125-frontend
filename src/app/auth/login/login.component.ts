import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { LoginRequestPayLoad } from './login.request.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload : LoginRequestPayLoad;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private authService: AuthService,private activatedRoute: ActivatedRoute,private router: Router) { 
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }
  login(){
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    //subscribe to the response we recieve from the authservice, if successful navigate to ("/")
    // if error, we set is error to true and our html will display a message
    this.authService.login(this.loginRequestPayload).subscribe(data => {
    if(data){
      this.isError = false;
      this.router.navigateByUrl('/home');
    }else{ 
      this.isError = true;
    }
  });
}
}
  
