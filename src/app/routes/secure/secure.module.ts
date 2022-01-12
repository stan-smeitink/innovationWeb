import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecureComponent} from './secure/secure.component';
import {CommonModule} from '@angular/common';
import {EmployersComponent} from "./employers/employers.component";
import {EmployeesComponent} from "./employees/employees.component";
import {DossiersComponent} from "./dossiers/dossiers.component";

const routes: Routes = [
  {path: 'secure', component: SecureComponent},
  {path: 'employers', component: EmployersComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'dossiers', component: DossiersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [SecureComponent, DossiersComponent, EmployeesComponent, EmployersComponent],
  exports: [RouterModule]
})

export class SecureModule {
}
