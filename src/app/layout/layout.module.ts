import {NgModule} from '@angular/core';

import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';

import {FooterComponent} from './footer/footer.component';

import {SharedModule} from '../shared/shared.module';
import {TokenStorageService} from "../core/auth/token-storage.service";

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    TokenStorageService
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule {
}
