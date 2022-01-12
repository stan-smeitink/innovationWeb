import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL + 'absence-courses';

@Injectable({
  providedIn: 'root'
})
export class AbsenceCoursesService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }

  store(start_at: string, end_at: string, employee_id: number, type_id: number, absence_percentage: number): Observable<any> {
    return this.http.post(AUTH_API, {
      start_at,
      end_at,
      employee_id,
      type_id,
      absence_percentage,
    });
  }

  update(id: number, start_at: string, end_at: string, employee_id: number, type_id: number, absence_percentage: number): Observable<any> {
    return this.http.patch(`${AUTH_API}/${id}`, {
      start_at,
      end_at,
      employee_id,
      type_id,
      absence_percentage,
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`);
  }
}
