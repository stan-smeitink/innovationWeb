import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = environment.API_URL + 'absence-types';

@Injectable({
  providedIn: 'root'
})
export class AbsenceTypeService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(AUTH_API);
  }
}
