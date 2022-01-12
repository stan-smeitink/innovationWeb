import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../core/auth/token-storage.service";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AbsenceCoursesService {
  private  httpOptions = {};
  constructor(private http: HttpClient, private token: TokenStorageService) {
    const bearerToken = token.getToken();
    if(bearerToken){
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${bearerToken}`})
      };
    }else{
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    }
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API + 'absence-courses', this.httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}absence-courses/${id} `, this.httpOptions);
  }

  store(id: number, start_at: string, end_at: string, employee_id:number, type_id: number, absence_percentage: number): Observable<any> {
    return this.http.post(`${AUTH_API}absence-courses/${id} `,{
      start_at,
      end_at,
      employee_id,
      type_id,
      absence_percentage,
    }, this.httpOptions);
  }

  update(id: number, start_at: string, end_at: string, employee_id:number, type_id: number, absence_percentage: number): Observable<any> {
    return this.http.patch(`${AUTH_API}absence-courses/${id} `,{
      start_at,
      end_at,
      employee_id,
      type_id,
      absence_percentage,
    }, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}absence-courses/${id} `, this.httpOptions);
  }
}
