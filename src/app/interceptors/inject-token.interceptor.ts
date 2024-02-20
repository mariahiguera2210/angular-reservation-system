import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('se esta ejecutando el interceptor')
    const token= this.cookie.get('token')
    try{
      let newRequest = request;
      newRequest = request.clone({
        setHeaders : {
          authorization : `Bearer ${token}`
        }
      })
      return next.handle(newRequest);

    }catch(e){
      console.log('error en el interceptor');
      return next.handle(request);
    }
    
}
}
