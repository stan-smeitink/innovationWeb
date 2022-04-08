import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import { LastViewedDossiersComponent } from './widgets/last-viewed-dossiers/last-viewed-dossiers.component';



const routes: Routes = [
  {path: '', component: DashboardComponent},
];

@NgModule({
  declarations: [
    LastViewedDossiersComponent
  ],
  exports: [
    LastViewedDossiersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
