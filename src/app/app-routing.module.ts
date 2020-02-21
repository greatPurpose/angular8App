import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/anon-pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  }, {
    path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  }, {
    path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
