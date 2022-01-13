import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from './form/form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees.component"; //TODO: replace with SharedModule?

const routes: Routes = [
  {path: '', component: EmployeesComponent},
  {path: 'create', component: FormComponent},
  {path: 'update/:id', component: FormComponent},
];

@NgModule({
  declarations: [],
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
