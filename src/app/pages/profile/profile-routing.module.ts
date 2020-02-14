import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileGuard } from './services/profile.guard';

import { ProfileComponent } from './profile.component';
import { ProgressComponent } from '../../components/progress/progress.component'

import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      { path: 'overview', component: OverviewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
