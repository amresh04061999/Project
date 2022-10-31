import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    CreateNewPasswordComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    RouterModule
  ],
  exports: [HeaderComponent,RegistrationComponent,LoginComponent]
})
export class CoreModule { }
