import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = environment.API_URL;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name,
      email,
      password
    });
  }
}
