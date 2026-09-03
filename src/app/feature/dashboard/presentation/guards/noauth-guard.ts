import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noauthGuard: CanActivateFn = (route, state) => {
  let pLATFORM_ID = inject(PLATFORM_ID)
  let router = inject(Router)

  if (isPlatformBrowser(pLATFORM_ID)) {
    if (localStorage.getItem('token') != null) {
      return router.parseUrl('/deplomas')
    } else {
      return router.parseUrl('/login');
    }
  }
  else {
    return true;
  }
};
