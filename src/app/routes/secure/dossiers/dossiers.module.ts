import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DossiersComponent} from "./dossiers.component";
import {FormComponent} from "./form/form.component";
import { DossierFormComponent } from './dossier-form/dossier-form.component';


const routes: Routes = [
  {path: '', component: DossiersComponent},
  {path: 'create', component: FormComponent},
  {path: 'update/:id', component: DossierFormComponent},
];

@NgModule({
  declarations: [
    FormComponent,
    DossierFormComponent
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
