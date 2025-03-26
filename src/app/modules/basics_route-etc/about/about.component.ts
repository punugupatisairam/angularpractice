import { Component } from '@angular/core';
import { TopService } from '../../../top.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  productsdata : any =null;

  constructor(private h:HttpClient){

   
  }
  getdata(){
    this.h.get("https://fakestoreapi.com/products").subscribe((data)=>{
      console.log();
      
      this.productsdata = data 
     })
  }


}
