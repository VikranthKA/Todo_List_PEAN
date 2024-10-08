import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  if(typeof window !== 'undefined' && localStorage.getItem('authToken') ){

    const authToken = localStorage.getItem('authToken');
  
    if (authToken) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `${authToken}`
        }
      });
      return next(clonedReq);
    }
  }

  return next(req);
};
