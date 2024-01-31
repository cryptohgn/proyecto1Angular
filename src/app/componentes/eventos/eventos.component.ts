import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  opcionSeleccionada: string = "NINGUNA";
  seleccionarOpcion($event: any) {
   this.opcionSeleccionada = $event.target.value;
  }
}
