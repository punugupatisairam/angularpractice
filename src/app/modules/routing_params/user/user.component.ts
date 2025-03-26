import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  usersdata:any;
  constructor( private us:UsersService ){
    this.usersdata=this.us.users
  }

}
