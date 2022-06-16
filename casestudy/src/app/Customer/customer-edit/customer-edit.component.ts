import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';
import {CustomerType} from '../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [CustomerService]
})
export class CustomerEditComponent implements OnInit {
  id: string;
  customerUpdate: FormGroup;
  customerTypes: CustomerType[] = [];

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }


  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService
              // tslint:disable-next-line:align
    , private activatedRoute: ActivatedRoute) {
    // lay id dang string
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.customerUpdate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('', [Validators.required]),
      // tslint:disable-next-line:max-line-length
      dayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
      gender: new FormControl('', [Validators.required]),
      nationalId: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
    this.getCustomer(this.id);
  }


  getCustomer(id: string) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerUpdate.patchValue(customer);
    });
  }

  onSubmit(id: string) {
    const customer = this.customerUpdate.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('Thanh Cong');
    });

  }

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAllCustomerType();
  }

}

