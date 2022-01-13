import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployersComponent} from "./employers.component";
import {FormComponent} from './form/form.component';
import {FormsModule} from '@angular/forms'; //TODO: replace with SharedModule?

const routes: Routes = [
  {path: '', component: EmployersComponent},
  {path: 'create', component: FormComponent},
  {path: 'update/:id', component: FormComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [
    FormComponent
  ],
  exports: [
    RouterModule
  ]
})
export class EmployersModule {
}
