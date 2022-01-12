import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const AUTH_API = environment.API_URL + 'employers';

@Injectable({
  providedIn: 'root'
})
export class EmployersService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }

  store(name: string, street: string): Observable<any> {
    return this.http.post(AUTH_API, {
      name,
      street,
    });
  }

  update(id: number, name: string, street: string): Observable<any> {
    return this.http.patch(`${AUTH_API}/${id}`, {
      name
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`);
  }
}
