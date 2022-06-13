import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerUpdate = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
    gender: new FormControl('', [Validators.required]),
    nationalId: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  });

  constructor() {
  }

  onSubmit() {
    alert('thanh cong');
  }

  ngOnInit(): void {
  }


}
