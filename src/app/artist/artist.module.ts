import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistRegistrationFormComponent } from './artist-registration-form/artist-registration-form.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './Services/http.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageService } from './Services/page.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistListComponent,
    ArtistRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, PageService]
})
export class ArtistModule { }
