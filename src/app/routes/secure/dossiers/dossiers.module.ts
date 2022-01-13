import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DossiersComponent} from "./dossiers.component";
import {FormComponent} from "./form/form.component";


const routes: Routes = [
  {path: '', component: DossiersComponent},
  {path: 'create', component: FormComponent},
  {path: 'update', component: FormComponent},
];

@NgModule({
  declarations: [
    FormComponent
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
export class DossiersModule { }
