import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecureComponent} from './secure/secure.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: 'secure', component: SecureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [SecureComponent],
  exports: [RouterModule]
})

export class SecureModule {
}
