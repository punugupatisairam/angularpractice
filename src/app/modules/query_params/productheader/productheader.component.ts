import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productheader',
  templateUrl: './productheader.component.html',
  styleUrl: './productheader.component.css'
})
export class ProductheaderComponent {

  constructor(private r:Router){

  }

  navigation(){
    this.r.navigate(['/users'],{
      queryParams:{'page':'8','id':'4'} 
    }) 
    }
  
}
