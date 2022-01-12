import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../core/auth/token-storage.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class DossierStatusesService {

  private httpOptions = {};

  constructor(private http: HttpClient, private token: TokenStorageService) {
    const bearerToken = token.getToken();
    if (bearerToken) {
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${bearerToken}`})
      };
    } else {
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    }
  }

  all(): Observable<any> {
    return this.http.get(`${AUTH_API}dossier-statuses`, this.httpOptions);
  }
}
