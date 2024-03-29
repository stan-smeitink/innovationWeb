import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecureComponent} from './secure/secure.component';
import {CommonModule} from '@angular/common';
import {EmployersComponent} from "./employers/employers.component";
import {FormsModule} from '@angular/forms';
import {EmployeesComponent} from "./employees/employees.component";
import {DossiersComponent} from "./dossiers/dossiers.component";
import {FormComponent} from './employees/form/form.component';
import {EmployersModule} from "./employers/employers.module";
import {CustomModalComponent} from "../../shared/custom-modal";
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardModule} from "./dashboard/dashboard.module";

const routes: Routes = [
  {path: 'secure', component: SecureComponent},
  {path: 'employers', loadChildren: () => import('./employers/employers.module').then(m => m.EmployersModule)},
  {path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)},
  {path: 'dossiers', loadChildren: () => import('./dossiers/dossiers.module').then(m => m.DossiersModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, EmployersModule, DashboardModule],
  declarations: [SecureComponent, DossiersComponent, EmployeesComponent, EmployersComponent, FormComponent, CustomModalComponent, DashboardComponent],
  exports: [RouterModule]
})

export class SecureModule {
}
