import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL + 'employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }

  store(name: string, date_of_birth: string, employer_id: number): Observable<any> {
    return this.http.post(AUTH_API, {
      name,
      date_of_birth,
      employer_id
    });
  }

  update(id: string, name: string, date_of_birth: string, employer_id: number): Observable<any> {
    return this.http.patch(`${AUTH_API}/${id}`, {
      name,
      date_of_birth,
      employer_id
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`);
  }
}
