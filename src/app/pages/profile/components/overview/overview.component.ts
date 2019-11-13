import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../core/models/user';

import { ProfileService } from '../../services/profile.service';
import { ScoresStoreService } from '../../../../common/services/scores-store.service';
import { CommonService } from '../../../../common/services/common.service';
import { AppRoutes } from "src/app/common/utils/routes-map.util";


interface ResponseValue {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    phone: string;
    degree: string;
    employment: string;
    age: number;
    zipcode: string;
    income: number;
    scores: number[][];
}

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    isLoading = false;
    response;
    registerResponse: any = null;
    user: User;

    constructor(
        private profileService: ProfileService,
        private commonService: CommonService,
        private scoresStoreService: ScoresStoreService,
        private router: Router
    ) { }

    ngOnInit() {
        // FIXME
        this.user = this.profileService.user;
    }

    next() {
        // this.router.navigate([AppRoutes.ProfileVerify]);
    }

}
