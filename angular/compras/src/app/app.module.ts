import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ListasModule } from './listas/listas.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModule,
    ListasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
