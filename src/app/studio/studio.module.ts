import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { StudioRegistrationFormComponent } from './studio-registration-form/studio-registration-form.component';
import { StudioListComponent } from './studio-list/studio-list.component';


@NgModule({
  declarations: [
    StudioComponent,
    StudioRegistrationFormComponent,
    StudioListComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule
  ]
})
export class StudioModule { }
