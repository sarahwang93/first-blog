import { CanActivateFn } from '@angular/router';

export const buttonDeactiveGuard: CanActivateFn = (route, state) => {
  return true;
};
