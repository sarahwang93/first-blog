import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardActivateComponent implements CanActivate {
  constructor(private authService: AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log(this.authService.getToken())
    if(this.authService.getToken()){
      console.log(this.authService.getToken());
      return true;
    }
    return true;
  }
}