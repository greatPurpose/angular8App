import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '../../../../common/utils/routes-map.util';

import { SignupService } from '../../services/signup.service';
import { CommonService } from '../../../../common/services/common.service';

@Component({
    selector: 'app-verify-info',
    templateUrl: './verify-info.component.html',
    styleUrls: ['./verify-info.component.scss']
})
export class VerifyInfoComponent implements OnInit {

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
            firstName: [this.signupService.user.firstName || '', Validators.required],
            lastName: [this.signupService.user.lastName || '', Validators.required],
            phone: [this.signupService.user.phone || '', Validators.required],
            terms: [this.signupService.user.terms || false, Validators.requiredTrue],
        });
    }

    async send() {
      try {
        this.isLoading = true;
        this.signupService.saveVerifyInfo(this.form.value);
        this.response = await this.signupService.signup().toPromise();
        this.commonService.toastr('Your request has been successfully sent.');
        this.router.navigate([AppRoutes.SignupEnterCode]);
      } catch (e) {
        this.commonService.toastr('Sorry, Failed to save user information. Please try again later.');
      } finally {
        this.isLoading = false;
      }
    }

    prev() {
        this.signupService.saveVerifyInfo(this.form.value);
        this.router.navigate([AppRoutes.SignupScores]);
    }

}
