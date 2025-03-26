import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  allproducts :any[]=[] ;  

  constructor(private ps : ProductsService ,private ar :ActivatedRoute){}
  ngOnInit(){

    this.ar.queryParamMap.subscribe((qparams)=>{
      let category = qparams.get("category")
      if(category){
       this.allproducts = this.ps.products.filter((p)=>{
         return p.category==category
        })
      }
      else{
        this.allproducts = this.ps.products
      }
    }) 
   

  }
  
}
