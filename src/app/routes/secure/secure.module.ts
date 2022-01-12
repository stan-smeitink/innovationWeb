import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecureComponent} from './secure/secure.component';
import {CommonModule} from '@angular/common';
import {EmployersComponent} from "./employers/employers.component";
import {FormsModule} from '@angular/forms'; //TODO: replace with SharedModule?
import {EmployeesComponent} from "./employees/employees.component";
import {DossiersComponent} from "./dossiers/dossiers.component";
import { FormComponent } from './employees/form/form.component';

const routes: Routes = [
  {path: 'secure', component: SecureComponent},
  {path: 'employers', loadChildren: () => import('./employers/employers.module').then(m => m.EmployersModule)},
  {path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)},
  {path: 'dossiers', component: DossiersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  declarations: [SecureComponent, DossiersComponent, EmployeesComponent, EmployersComponent, FormComponent],
  exports: [RouterModule]
})

export class SecureModule {
}
