import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [HeaderComponent,RegistrationComponent]
})
export class CoreModule { }
