import {Component, NgModule, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidationErrors} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      pass2: new FormControl('', [Validators.required, Validators.minLength(6)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.requiredTrue]),
      // tslint:disable-next-line:max-line-length
      phone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    }, [this.customPass]
  );

  get email() {
    return this.registerForm.get('email');
  }

  get pass() {
    return this.registerForm.get('pass');
  }

  get pass2() {
    return this.registerForm.get('pass2');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get age() {
    return this.registerForm.get('age');
  }

  // @ts-ignore
  @NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule
    ]
  })
  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    alert('Bạn đá đăng kí thành công ');
  }


  customPass(confirm: AbstractControl) {
    const pass1 = confirm.get('pass').value;
    const pass2 = confirm.get('pass2').value;
    // tslint:disable-next-line:triple-equals
    if (pass2 !== pass1) {
      return {
        ctp: true
      };
    } else {
      return null;
    }
  }
}
