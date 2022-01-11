import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = environment.API_URL;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  // public login(username: string, password: string): void {
  //   const data = {
  //     username,
  //     password
  //   };
  //
  //   // TODO: login call here
  //
  //   // const token = result.access_token;
  //   // localStorage.setItem('access_token', token);
  //   // this.token = token;
  //   // this.router.navigate(['secure']);
  // }

  // public logout(): void {
  //   if (this.isLoggedIn()) {
  //     const headers = this.headers();
  //
  //     // TODO: logout call here
  //
  //     // localStorage.removeItem('access_token');
  //     // this.token = null;
  //   }
  // }

  // public isLoggedIn(): boolean {
  //   return this.token !== null;
  // }

  // private headers(): HttpHeaders {
  //   return new HttpHeaders({Authorization: `Bearer ${this.token}`});
  // }
}
