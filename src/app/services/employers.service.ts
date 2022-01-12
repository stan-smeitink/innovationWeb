import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

const AUTH_API = environment.API_URL;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployersService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API + 'employers', httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}employers/${id}`, httpOptions);
  }

  store(name: string, street: string): Observable<any> {
    return this.http.post(`${AUTH_API}employers`, {
      name,
      street,
    }, httpOptions);
  }

  update(id: number, name: string, street: string): Observable<any> {
    return this.http.patch(`${AUTH_API}employers/${id}`, {
      name,
    }, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}employers/${id}`, httpOptions);
  }
}
