import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopService } from '../../../top.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

@Input() headertop:any;
@Input() headersub:any;
@Input() reuse:any;
 
@Output() comm = new EventEmitter()

message = " it's a ouput decorator child to parent"

passtoparent(){
  this.comm.emit(this.message) 
}

tempref="template reference variable";

vachindhi(){
  return this.tempref
}

// booksdata :String[]; 

// constructor(public d:TopService){
  
// this.booksdata=this.d.books

// }
}
