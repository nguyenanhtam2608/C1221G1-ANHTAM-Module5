import {Component, NgModule, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CustomerService} from '../customer.service';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {CustomerTypeService} from '../customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
  providers: [CustomerService]
})
export class CustomerCreateComponent implements OnInit {

  customerCreate = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
    gender: new FormControl('', [Validators.required]),
    nationalId: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });
  customer: Customer[] = [];
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  //
  // onSubmit() {
  //   const cusotmer = this.customerCreate.value;
  //   this.customerService.saveCustomer(cusotmer);
  //   this.customerCreate.reset();
  // }
  onSubmit() {
    const customer = this.customerCreate.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      alert('Tạo thành công');
      this.customerCreate.reset();
    }, e => console.log(e));
  }

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAllCustomerType();
  }



}
