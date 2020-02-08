import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupGuard } from './services/signup.guard';

import { SignupComponent } from './signup.component';
import { ProgressComponent } from '../../components/progress/progress.component'

import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { MorePersonalInfoComponent } from './components/more-personal-info/more-personal-info.component';
import { CoverageInfoComponent } from './components/coverage-info/coverage-info.component';
import { InitialScoresComponent } from './components/initial-scores/initial-scores.component';
import { VerifyInfoComponent } from './components/verify-info/verify-info.component';
import { EnterCodeComponent } from './components/enter-code/enter-code.component';
import { ProcessingCoveragesComponent } from './components/processing-coverages/processing-coverages.component';
import { LoginComponent } from './components/login/login.component';
import { LoginCodeComponent } from './components/login-code/login-code.component';

const routes: Routes = [
  {
    path: '', component: SignupComponent, children: [
      { path: '', component: PersonalInfoComponent },
      { path: 'more', component: MorePersonalInfoComponent },
      { path: 'coverage', component: CoverageInfoComponent },
      { path: 'scores', component: InitialScoresComponent },
      { path: 'verify', component: VerifyInfoComponent },
      { path: 'enter-code', component: EnterCodeComponent },
      { path: 'processing', component: ProcessingCoveragesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login-code', component: LoginCodeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
