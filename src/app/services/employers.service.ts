import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const AUTH_API = environment.API_URL + 'employers/';

@Injectable()
export class EmployersService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API + 'employers');
  }

  show(id: number): Observable<any> {
    return this.http.get(AUTH_API + 'employers/' + id);
  }

  store(name: string, street: string): Observable<any> {
    return this.http.post(`${AUTH_API}employers`, {
      name,
      street,
    });
  }

  update(id: number, name: string, street: string): Observable<any> {
    return this.http.patch(`${AUTH_API}employers/${id}`, {name});
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}employers/${id}`);
  }
}
