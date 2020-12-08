import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { SignupRequestPayLoad } from '../signup/signup-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { LoginRequestPayLoad } from '../login/login.request.payload';
import { LocalStorageService } from 'ngx-webstorage';
import {map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient,private localStorage: LocalStorageService) { }

  signup(signupRequestPayload: SignupRequestPayLoad): Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload,{responseType: 'text'});
  }
  login(loginRequestPayload : LoginRequestPayLoad): Observable<boolean> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login',
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('jwt', data.jwt);
        this.localStorage.store('username', data.username);
        this.localStorage.store('expiresAt', data.expiresAt);

        return true;
      }));
  }
  getUserName(){
    return this.localStorage.retrieve('username');
  }
}
