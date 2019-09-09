import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../common/utils/routes-map.util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
      this.router.navigate([AppRoutes.SignupLogin]);
  }

}
