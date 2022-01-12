import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../core/auth/token-storage.service";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class DossiersService {

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
    return this.http.get(AUTH_API + 'dossiers', this.httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}dossiers/${id}`, this.httpOptions);
  }

  store(id: number, dossier_status_id: number,start_at:string, end_at:string, employee_id:number): Observable<any> {
    return this.http.post(`${AUTH_API}dossiers/${id}`,{
      dossier_status_id,
      start_at,
      end_at,
      employee_id,
    }, this.httpOptions);
  }

  update(id: number, dossier_status_id: number,start_at:string, end_at:string, employee_id:number): Observable<any> {
    return this.http.patch(`${AUTH_API}dossiers/${id}`,{
      dossier_status_id,
      start_at,
      end_at,
      employee_id,
    }, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}dossiers/${id}`, this.httpOptions);
  }
}
