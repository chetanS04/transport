import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenStorageService);
  const router = inject(Router);

  // If user is NOT logged in → send to login + store callback URL
  if (!tokenService.isAuthenticated()) {
    router.navigate(['/login'], {
      queryParams: { redirectTo: state.url }  // callback URL handling
    });
    return false;
  }

  return true;
};
