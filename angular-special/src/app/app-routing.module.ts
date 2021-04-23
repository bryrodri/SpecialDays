import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import {PrincipalComponent} from './public/principal/principal.component'

const routes: Routes = [
  {path:'inicio', component:PrincipalComponent},
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
