import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import {TokenStorageService} from "./token-storage.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private token: TokenStorageService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.token.getToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
