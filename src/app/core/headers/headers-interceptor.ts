import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { platform } from 'os';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  //REQUEST
  let pLATFORM_ID = inject(PLATFORM_ID)


  if (isPlatformBrowser(pLATFORM_ID)) {
    if (localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }
  }


  return next(req);//RESPONSE
};
