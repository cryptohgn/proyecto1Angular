import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContadorClickComponent } from './componentes/contador-click/contador-click.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ProfileCardComponent } from './componentes/profile-card/profile-card.component';
import { CronometroComponent } from './componentes/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    ContadorComponent,
    GaleriaComponent,
    ContadorClickComponent,
    EventosComponent,
    FormularioComponent,
    ProfileCardComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
