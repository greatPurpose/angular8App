import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '../../../../common/utils/routes-map.util';

import { SignupService } from '../../services/signup.service';
import { CommonService } from '../../../../common/services/common.service';

@Component({
    selector: 'app-processing-coverages',
    templateUrl: './processing-coverages.component.html',
    styleUrls: ['./processing-coverages.component.scss']
})
export class ProcessingCoveragesComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        const self = this;
        setTimeout(function() {
            self.router.navigate([AppRoutes.ProfileOverview]);
        }, 10000);
    }

}
