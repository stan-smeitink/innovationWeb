import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable()
export class OptionsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});

    if (!req.headers.has('Accept')) {
      req = req.clone({headers: req.headers.set('Accept', 'application/json')});
    }
    return next.handle(req);
  }
}

export const optionsInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: OptionsInterceptor, multi: true }
];
