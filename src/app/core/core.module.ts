import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
