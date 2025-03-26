import { Component } from '@angular/core';
import { TopService } from '../../../top.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   
  usersdata :any;

  constructor(public d:TopService , public route :ActivatedRoute){
    this.usersdata = this.d.users
    // console.log(this.booksdata);
}

// ngOnInit() : void{
//   this.route.paramMap.subscribe(
//     params=>{
//       let userid = + params.get('id');
//       this.usersdata = this.d.users.find( u=>u.id==userid)

//     }
//   )
// }
  



}

// ngOnInit(): void {
//   this.route.paramMap.subscribe(params => {
//     const idParam = params.get('id');
//     if (idParam) {
//       const userid = +idParam;  // Convert idParam to number
//       this.usersdata = this.d.users.find(u => u.id === userid);
//     }
//   });
// }