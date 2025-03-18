import { Injectable } from '@angular/core';
import {
HttpRequest,
HttpHandler,
HttpEvent,
HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class AuthInterceptorServiceService
implements HttpInterceptor {
   constructor() {}
   
   intercept(request: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('auth-token')
    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
         setHeaders: {Authorization: `Authorization token ${token}`}
      });
   }
         return next.handle(request).pipe(
              //   catchError((err) => {
              //   if (err instanceof HttpErrorResponse) {
              //       if (err.status === 401) {
              //       // redirect user to the logout page
              //     }
              // }
              //   return throwError(err);
              // }
            //)
        )
   }
}