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
  valorDelInput: string ="";
  obtenerValorInput($event: any){
    this.valorDelInput = $event.target.value;
  }
}

// Dentro del componente Eventos vamos a colocar un campo de texto
// ```html
// <input type="text">
// ```
//   - Recuperamos el valor escrito en el campo de texto y lo mostramos en un párrafo 
//   - ¿Qué evento es el que me permite visualizar el cambio sobre el campo de texto?
