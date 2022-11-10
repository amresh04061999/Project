import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public userform: FormGroup
  public isSubmited = false
  public icon: string;
  public type: string;
  constructor(private fb: FormBuilder) {
    this.icon = 'eye-slash';
    this.type = 'password';
    this.userform = this.fb.group({
      Phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(10), Validators.minLength(10),]],
      UserTypeId: ['', [Validators.required]]

    })

  }


  submit() {
    this.isSubmited = true

  }
  // geter function
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.userform.controls;
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
