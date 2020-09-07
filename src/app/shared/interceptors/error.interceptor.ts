import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( private authService: AuthServiceService,
               private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.authService.logout();
        this.router.navigate(['/']);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
