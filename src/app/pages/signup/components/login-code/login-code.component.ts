import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '../../../../common/utils/routes-map.util';

import { SignupService } from '../../services/signup.service';
import { CommonService } from '../../../../common/services/common.service';
import { ScoresStoreService } from '../../../../common/services/scores-store.service';

@Component({
    selector: 'app-login-code',
    templateUrl: './login-code.component.html',
    styleUrls: ['./login-code.component.scss']
})
export class LoginCodeComponent implements OnInit {

    isLoading = false;
    response = null;
    form: FormGroup;

    constructor(
        private signupService: SignupService,
        private commonService: CommonService,
        private scoresStoreService: ScoresStoreService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            code: ['', Validators.required],
        });
    }

    async send() {
      try {
        this.isLoading = true;
        // this.response = await this.signupService.enterCode(this.form.value.code).toPromise();
        this.commonService.toastr('Your request has been successfully sent.');
        this.scoresStoreService.addScores({"id":null,"score_overall":22,"score_medical":44,"score_income":67,"score_stuff":55,"score_liability":15,"score_digital":82,"content_overall":"Your overall score of 22 shows you're doing good.","content_medical":"You are underprotected in your medical category.","content_income":"We also think you're overprotected in your income category.","content_stuff":"","content_liability":"","content_digital":""});
        this.router.navigate([AppRoutes.ProfileOverview]);
      } catch (e) {
        this.commonService.toastr('Sorry, Failed to save user information. Please try again later.');
      } finally {
        this.isLoading = false;
      }
    }
}
