import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrudProdutosComponent } from './crud-produtos/crud-produtos.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CrudProdutosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
