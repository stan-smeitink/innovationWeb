import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TokenStorageService} from "../core/auth/token-storage.service";

const AUTH_API = environment.API_URL;

@Injectable()
export class EmployersService {

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
    return this.http.get(AUTH_API + 'employers', this.httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${AUTH_API}employers/${id} `, this.httpOptions);
  }

  update(id: number, name: string): Observable<any> {
    return this.http.patch(`${AUTH_API}employers/${id} `,{
      name,
    }, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${AUTH_API}employers/${id} `, this.httpOptions);
  }
}
