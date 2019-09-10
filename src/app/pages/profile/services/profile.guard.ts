import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ProfileService } from './profile.service';
import { AppRoutes } from '../../../common/utils/routes-map.util';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	if (Boolean(this.profileService.user.firstName && this.profileService.user.lastName && this.profileService.user.phone
		&& this.profileService.user.degree && this.profileService.user.employment && this.profileService.user.income
		&& this.profileService.user.age && this.profileService.user.zipcode)) {
      return true;
    } else {
      this.router.navigate([AppRoutes.Home]);
      return false;
    }
  }

}
