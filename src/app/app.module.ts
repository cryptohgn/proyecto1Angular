import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
