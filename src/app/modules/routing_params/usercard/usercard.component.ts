import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent implements OnInit {
  usersdata: any;



  constructor(private us: UsersService, private route: ActivatedRoute) { }
  // this.usersdata=this.us.users

  ngOnInit(): void {
    // this.route.paramMap.subscribe(
    //   params=>{
    //     let userid = +params.get('id')
    //     this.usersdata = this.us.users.find(u => u.id===userid)
    //   }
    // )

    let userid = this.route.snapshot.paramMap.get('id')
    this.usersdata = this.us.users.find((u: { id: number }) => u.id == Number(userid));
    // console.log(this.usersdata);


  }

}
// this.usersdata = this.us.users.find(u =>u.id==userid)



