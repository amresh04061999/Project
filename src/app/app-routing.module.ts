import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewPasswordComponent } from './core/create-new-password/create-new-password.component';
import { ForgetPasswordComponent } from './core/forget-password/forget-password.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
      {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:'registration',component:RegistrationComponent
      },
      {
        path:'forgetpassword',component:ForgetPasswordComponent
      },
      {
        path:'newpassword',component:CreateNewPasswordComponent
      },
      { path: 'Studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule) },
      { path: 'Artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },
      {
        path:'**',component:PageNotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
