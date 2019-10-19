import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignupService } from "../../services/signup.service";
import { ScoresStoreService } from '../../../../common/services/scores-store.service';
import { CommonService } from '../../../../common/services/common.service';
import { Router } from "@angular/router";
import { AppRoutes } from "src/app/common/utils/routes-map.util";

@Component({
    selector: "app-coverage-info",
    templateUrl: "./coverage-info.component.html",
    styleUrls: ["./coverage-info.component.scss"]
})
export class CoverageInfoComponent implements OnInit {

    isLoading = false;
    response = null;
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private signupService: SignupService,
        private commonService: CommonService,
        private scoresStoreService: ScoresStoreService,
        private router: Router
    ) {}

    ngOnInit() {
        this.form = this.fb.group({
            have_health_cover: [
                this.signupService.user.have_health_cover || "",
                Validators.required
            ],
            have_vision_cover: [
                this.signupService.user.have_vision_cover || "",
                Validators.required
            ],
            have_dental_cover: [
                this.signupService.user.have_dental_cover || "",
                Validators.required
            ],
            have_life_cover: [
                this.signupService.user.have_life_cover || "",
                Validators.required
            ],
            have_longtermdisability_cover: [
                this.signupService.user.have_longtermdisability_cover || "",
                Validators.required
            ],
            have_shorttermdisability_cover: [
                this.signupService.user.have_shorttermdisability_cover || "",
                Validators.required
            ],
            have_accident_cover: [
                this.signupService.user.have_accident_cover || "",
                Validators.required
            ],
            have_criticalillness_cover: [
                this.signupService.user.have_criticalillness_cover || "",
                Validators.required
            ],
            have_auto_cover: [
                this.signupService.user.have_auto_cover || "",
                Validators.required
            ],
            have_homeowner_cover: [
                this.signupService.user.have_homeowner_cover || "",
                Validators.required
            ],
            have_renters_cover: [
                this.signupService.user.have_renters_cover || "",
                Validators.required
            ],
            have_pet_cover: [
                this.signupService.user.have_pet_cover || "",
                Validators.required
            ]
        });
    }

    async send() {
        try {
            this.isLoading = true;
            this.signupService.saveCoverageInfo(this.form.value);
            this.response = await this.signupService.getScore().toPromise();
            this.scoresStoreService.addScores(this.response);
            this.commonService.toastr('Your request has been successfully sent.');
            this.router.navigate([AppRoutes.SignupScores]);
        } catch (e) {
            this.commonService.toastr('Sorry, Failed to save user information. Please try again later.');
        } finally {
            this.isLoading = false;
        }
    }

    prev() {
        this.signupService.saveCoverageInfo(this.form.value);
        this.router.navigate([AppRoutes.SignupMorePersonalInfo]);
    }

    formatLabel(value: number | null) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + "k";
        }
        return value;
    }
}
