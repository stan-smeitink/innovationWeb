import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL + 'dossier-statuses';

@Injectable({
  providedIn: 'root'
})
export class DossierStatusesService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API);
  }
}
