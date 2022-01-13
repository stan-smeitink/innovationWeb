import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from './form/form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees.component";
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: '', component: EmployeesComponent},
  {path: 'create', component: FormComponent},
  {path: 'update/:id', component: FormComponent},
  {path: 'employee/:id', component: EmployeeComponent},
];

@NgModule({
  declarations: [
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesModule { }
