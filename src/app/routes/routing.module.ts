import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MenuService} from '../core/menu/menu.service';
import {AuthGuardService} from "../core/auth/auth-guard.service";

import {menu} from './menu'; // TODO
import {routes} from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  declarations: [],
  exports: [RouterModule]
})

export class RoutingModule {
  constructor(public menuService: MenuService) {
    menuService.addMenu(menu); // TODO
  }
}
