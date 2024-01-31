import { Component } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  imagenes: string[] = [
    'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/9b232-bluey-png.png',
    'https://1.bp.blogspot.com/-qhoOeLcVORs/YNniy_oTI9I/AAAAAAAAqfg/6UIMvWOIRAYHaOJ78lIbu6GwjKfomjhlwCLcBGAsYHQ/w416-h640/9422897523546f5cf8bef1eea55eaf45.png',
    'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/a0d94-bandit-bluey-png-2823535167-1627580422964.png',
    'https://i.pinimg.com/736x/78/85/0e/78850ea34b05f5ca4aeec83514d2e3af.jpg'
  ];
  indice: number = 0;
  constructor(){
    setInterval(()=>{
      this.indice++;
      if(this.indice === this.imagenes.length){
        this.indice=0;
      }
    },3000)
  }
}
