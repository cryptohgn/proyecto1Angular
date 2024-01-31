import { Component } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
 numero: number = 8;
 identificadorParafo: string = "Parrafo final";
 constructor(){
  console.log("Dentod del contador")
  setInterval(()=>{
    this.numero++;
  }, 1000)

 }
}
