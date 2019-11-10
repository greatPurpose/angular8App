import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../common/utils/routes-map.util';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    logout() {
        this.router.navigate([AppRoutes.Home]);
    }

}
