import {Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {AuthGuardService as AuthGuard} from '../core/auth/auth-guard.service';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
      {path: '', loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule), canActivate: [AuthGuard]}
    ]
  },

  // Not found
  {path: '**', redirectTo: 'home'}

];
