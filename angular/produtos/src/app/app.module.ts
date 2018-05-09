import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http'.
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { EditaComponent } from './edita/edita.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    EditaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
