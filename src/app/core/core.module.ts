import {NgModule, Optional, SkipSelf} from '@angular/core';

import {MenuService} from './menu/menu.service';
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";

import {throwIfAlreadyLoaded} from './module-import-guard';
import {authInterceptorProviders} from "./helpers/auth.interceptor";

@NgModule({
  imports: [],
  providers: [
    MenuService,
    AuthService,
    AuthGuardService,
    authInterceptorProviders
  ],
  declarations: [],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
