import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public icon: string;
  public type: string;
  constructor() {
    this.icon = 'eye-slash';
    this.type = 'password';
   }

  ngOnInit(): void {
  }
/**
   * password hide and show feature 
   */
 onEyeClick() {
  if (this.icon === 'eye-slash') {
    this.icon = 'eye';
    this.type = 'text';
  } else {
    this.icon = 'eye-slash';
    this.type = 'password';
  }
};
}
