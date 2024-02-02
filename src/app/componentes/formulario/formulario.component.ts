import { Component } from '@angular/core';

interface Ipersona {
  nombre: string;
  email: string;
  edad: number;
}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  texto: string = "seguro?";

  persona: Ipersona = { nombre: '', email: '', edad: 0};
  mostrarPersona(){
    console.log(this.persona)
  }
}
