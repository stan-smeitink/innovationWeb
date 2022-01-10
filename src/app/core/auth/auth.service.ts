import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class AuthService {
  private readonly baseUrl = environment.apiUrl;
  private token = localStorage.getItem('access_token') || null;
  // private user: User;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(username: string, password: string): void {
    const data = {
      username,
      password
    };

    // TODO: login call here
  }

  public logout(): void {
    if (this.isLoggedIn()) {
      const headers = this.headers();

      // TODO: logout call here
    }
  }

  public isLoggedIn(): boolean {
    return this.token !== null;
  }

  private headers(): HttpHeaders {
    return new HttpHeaders({Authorization: `Bearer ${this.token}`});
  }
}
