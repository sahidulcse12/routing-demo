import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false;
  if(isLoggedIn) return true;
  else{
    alert('You must login first!');
    return false;
  }
};
