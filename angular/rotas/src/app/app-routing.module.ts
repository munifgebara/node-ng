import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { OutraComponent } from './outra/outra.component';
import { NaoExisteComponent } from './nao-existe/nao-existe.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },

  { path: 'outra', component: OutraComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', component: NaoExisteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
