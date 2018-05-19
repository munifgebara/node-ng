import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { OutraComponent } from './outra/outra.component';
import { NaoExisteComponent } from './nao-existe/nao-existe.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ListasModule } from './listas/listas.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    OutraComponent,
    NaoExisteComponent
  ],
  imports: [
    BrowserModule,
    ProdutosModule,
    ListasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
