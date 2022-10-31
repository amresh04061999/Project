import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
