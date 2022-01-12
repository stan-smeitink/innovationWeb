import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MenuService} from '../core/menu/menu.service';

import {menu} from './menu';
import {routes} from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  declarations: [],
  exports: [RouterModule]
})

export class RoutingModule {
  constructor(public menuService: MenuService) {
    // TODO: fix a proper menu
    //menuService.addMenu(menu);
  }
}
