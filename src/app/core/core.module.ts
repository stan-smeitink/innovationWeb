import {NgModule, Optional, SkipSelf} from '@angular/core';

import {MenuService} from './menu/menu.service';
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";

import {throwIfAlreadyLoaded} from './module-import-guard';
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {optionsInterceptorProviders} from "./helpers/options.interceptor";

@NgModule({
  imports: [],
  providers: [
    MenuService,
    AuthService,
    AuthGuardService,
    authInterceptorProviders,
    optionsInterceptorProviders
  ],
  declarations: [],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
