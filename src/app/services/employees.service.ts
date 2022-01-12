import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../core/auth/token-storage.service";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

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
    return this.http.get(AUTH_API + 'employees', this.httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}employees/${id} `, this.httpOptions);
  }

  store(name: string, date_of_birth: string, employer_id:number): Observable<any> {
    return this.http.post(`${AUTH_API}employees `,{
      name,
      date_of_birth,
      employer_id,
    }, this.httpOptions);
  }

  update(id: number, name: string, date_of_birth: string, employer_id:number): Observable<any> {
    return this.http.patch(`${AUTH_API}employees/${id} `,{
      name,
      date_of_birth,
      employer_id,
    }, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}employees/${id} `, this.httpOptions);
  }
}
