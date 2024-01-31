import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-click',
  templateUrl: './contador-click.component.html',
  styleUrls: ['./contador-click.component.css']
})
export class ContadorClickComponent {
numero: number = 21;

modificarNumero(inc: boolean)  {
  if(inc){
    this.numero++;
  } else {
    this.numero--;
  }
 
}

}
