import {Component, NgModule, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get email() {
    return this.loginForm.get('email');
  }

  get pass() {
    return this.loginForm.get('pass');
  }

  constructor() {
  }

  // @ts-ignore
  @NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule
    ]
  })
  ngOnInit() {
  }

  onSubmit() {
    alert('Welcome to nguyen anh tam');
  }
}
