import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioRegistrationFormComponent } from './studio-registration-form/studio-registration-form.component';
import { StudioComponent } from './studio.component';

const routes: Routes = [
  { path: '', component: StudioComponent,
  children:[ 
    {
path:'',
pathMatch:'full',
 redirectTo:'Studio-Registation'
    },
    {path:'Studio-Registation',component:StudioRegistrationFormComponent},
    { path:'studio-list',component:StudioListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }
