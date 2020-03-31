import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../common/material/material.module';
import { ComponentsModule } from '../../components/components.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    ComponentsModule
  ]
})
export class ProfileModule { }
