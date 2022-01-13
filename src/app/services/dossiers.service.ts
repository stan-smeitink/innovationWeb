import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL + 'dossiers';

@Injectable({
  providedIn: 'root'
})
export class DossiersService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }

  store(dossier_status_id: number, start_at: string, end_at: string, employee_id: number): Observable<any> {
    return this.http.post(AUTH_API, {
      dossier_status_id,
      start_at,
      end_at,
      employee_id
    });
  }

  update(id: number, dossier_status_id: number, start_at: string, end_at: string, employee_id: number): Observable<any> {
    return this.http.patch(`${AUTH_API}/${id}`, {
      id,
      dossier_status_id,
      start_at,
      end_at,
      employee_id
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`);
  }
}
