import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistRegistrationFormComponent } from './artist-registration-form/artist-registration-form.component';


@NgModule({
  declarations: [
    ArtistComponent,
    ArtistListComponent,
    ArtistRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule { }
