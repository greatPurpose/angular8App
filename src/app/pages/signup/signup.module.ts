import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../common/material/material.module';
import { ComponentsModule } from '../../components/components.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { MorePersonalInfoComponent } from './components/more-personal-info/more-personal-info.component';
import { CoverageInfoComponent } from './components/coverage-info/coverage-info.component';
import { InitialScoresComponent } from './components/initial-scores/initial-scores.component';
import { VerifyInfoComponent } from './components/verify-info/verify-info.component';
import { EnterCodeComponent } from './components/enter-code/enter-code.component';
import { ProcessingCoveragesComponent } from './components/processing-coverages/processing-coverages.component';
import { LoginComponent } from './components/login/login.component';
import { LoginCodeComponent } from './components/login-code/login-code.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    SignupComponent,
    PersonalInfoComponent,
    MorePersonalInfoComponent,
    CoverageInfoComponent,
    InitialScoresComponent,
    VerifyInfoComponent,
    EnterCodeComponent,
    ProcessingCoveragesComponent,
    LoginComponent,
    LoginCodeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    ComponentsModule
  ]
})
export class SignupModule { }
