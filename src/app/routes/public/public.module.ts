import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms'; //TODO: replace with SharedModule?
import { DossiersComponent } from './dossiers/dossiers.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployersComponent } from './employers/employers.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'employers', component: EmployersComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'dossiers', component: DossiersComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, LoginComponent, RegisterComponent, DossiersComponent, EmployeesComponent, EmployersComponent],
  exports: [RouterModule]
})

export class PublicModule { }
