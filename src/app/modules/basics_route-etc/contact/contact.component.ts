import { Component, OnInit, AfterViewInit,ViewChild, ViewChildren } from '@angular/core';
import { withHashLocation } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title = 'angularpractice';


  name:string="sudhakar";

  imageurl="https://cdn.pixabay.com/photo/2023/05/11/13/09/jesus-7986396_640.jpg"

  events="prince"
  details(){
    this.events="prince of peace"
  }

  newTask="";



  condition1=true
  condition2=false

  toggleChange(){
    this.condition1 = !this.condition1;
    this.condition2 = !this.condition2;
  }


  add:any="";

  data=["prince","jesus","conditionally it will aplly"];

  num=["acts","romans","1corinthi","2corinthi","ephisi","phillipians"]

  BibleBooks = [
    {
      "id": 1,
      "name": "Genesis",
      "description": "This is item 1"
    },
    {
      "id": 2,
      "name": "Exodus",
      "description": "This is item 2"
    },
    {
      "id": 3,
      "name": "Liviticus",
      "description": "This is item 3"
    },
    {
      "id": 4,
      "name": "Numbers",
      "description": "This is item 4"
    },
    {
      "id":5,
      "name": "Duetornomy",
      "description": "This is item 5"
    }
  ]
  

  num1:number=5;
  num2:number=2;
  op:string="*";

  seasons:string=""
  summer="february,march,april,may"
  rainy="june,july,agust,september"
  winter="october,november,december"  

  months:string=""
  march="it's a summer season"
  june="it's a winter season"

  money:any='10';
  myname="SUDHAKAR"

  person = [
    {
      "name":'prince',
      "age":26,
      "salary":30000
    }
  ]

  dob=new Date();

  names='angular17'

  wish="praise the lord"

  person2={
    "name":"prince",
    "age":26,
    "gender":"male"

  }



  users:any =[];

  constructor(private http:HttpClient){

  }

  // ngOnInit(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
  //     (data)=>{
  //       this.users=data;
  //   }),
  //   (error:any)=>{
  //     console.error("error fetching users",error);
      
  //   }
  // }

  ngOnInit(){
   this.users= this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  headerdata='using input decorator for parent to child comm';
  subdata="getting data from another variable"
  arr=[20,3,4,1,5,6,7,]
  arrayofdata=["sairam","prince","sudhakar","paul"]


  childdata :any;

  @ViewChild("test") d:any; 


  getdata(){
    console.log(this.d);
    // this.d.nativeElement.style.background='blue';
    this.d.nativeElement.innerText='Vachindhi DOM manipulation';
  }

  // ngAfterViewInit(){
  //    this.d.nativeElement.onkeyup=()=>{
  //     console.log(this.d.nativeElement.value);
      
  //    }

  // }


  @ViewChildren("tests") t:any;

  children(){
   console.log(this.t._results[0].nativeElement.innerText);
   console.log(this.t);
   for(let e of this.t){
    console.log(e.nativeElement.innerText);
    
   }


  }

 
}
