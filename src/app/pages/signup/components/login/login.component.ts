import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '../../../../common/utils/routes-map.util';

import { SignupService } from '../../services/signup.service';
import { CommonService } from '../../../../common/services/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLoading = false;
    response = null;
    form: FormGroup;

    constructor(
        private signupService: SignupService,
        private commonService: CommonService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            phone: ['', Validators.required],
        });
    }

    async send() {
      try {
        this.isLoading = true;
        // this.response = await this.signupService.login(this.form.value.phone).toPromise();
        this.commonService.toastr('Your request has been successfully sent.');
        this.router.navigate([AppRoutes.SignupLoginCode]);
      } catch (e) {
        this.commonService.toastr('Sorry, Failed to save user information. Please try again later.');
      } finally {
        this.isLoading = false;
      }
    }

}
