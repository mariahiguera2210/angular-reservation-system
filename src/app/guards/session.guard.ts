import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SessionGuard implements CanActivate {

  constructor (private cookie: CookieService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkSession();
  }

  checkSession():any{
    try{
      const token: boolean = this.cookie.check('token') //validacion existencia del token
      console.log('se validan las cookies');
      console.log(token);
      if(!token){
        this.router.navigate(['/', 'login'])
      }
    }catch(e){
      console.log('Se presenta un error validando la cookie');
      return false
    }
  }
  
}
