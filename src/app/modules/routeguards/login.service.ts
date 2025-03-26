import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor(private r:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean { 
   let loggedin = false;
  //  return true
    if(loggedin){
      // this.r.navigate(['/dashboard'])
       return true;
    }
    else 
    {
      this.r.navigate(['/login']) 
      return false 
    }
  }
}
