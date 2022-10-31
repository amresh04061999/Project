import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistRegistrationFormComponent } from './artist-registration-form/artist-registration-form.component';
import { ArtistComponent } from './artist.component';

const routes: Routes = [{ path: '', component: ArtistComponent,
children:[
  {
    path:'',
    pathMatch:'full',
     redirectTo:'Artist-Registation'
        },
  {path:'Artist-Registation',component:ArtistRegistrationFormComponent},
  { path:'Artist-list',component:ArtistListComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
