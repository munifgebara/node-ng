import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ListasModule } from './listas/listas.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


const config = {
  apiKey: "AIzaSyDmRMjmaT1c5wAXklRPfUUfjciqJOI3iVU",
  authDomain: "ng-angular-unidavi.firebaseapp.com",
  databaseURL: "https://ng-angular-unidavi.firebaseio.com",
  projectId: "ng-angular-unidavi",
  storageBucket: "ng-angular-unidavi.appspot.com",
  messagingSenderId: "448045352166"
};



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    ProdutosModule,
    ListasModule,
    AppRoutingModule,

    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
