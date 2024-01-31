import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContadorClickComponent } from './componentes/contador-click/contador-click.component';
import { EventosComponent } from './componentes/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    ContadorComponent,
    GaleriaComponent,
    ContadorClickComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
