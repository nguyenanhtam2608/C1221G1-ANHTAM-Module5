import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [CustomerService]
})
export class CustomerEditComponent implements OnInit {
  id: number;
  customerUpdate: FormGroup;


  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerUpdate = new FormGroup({
        id: new FormControl(customer.id, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
        name: new FormControl(customer.name, [Validators.required]),
        // tslint:disable-next-line:max-line-length
        dayOfBirth: new FormControl(customer.dayOfBirth, [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
        gender: new FormControl(customer.gender, [Validators.required]),
        nationalId: new FormControl(customer.nationalId, [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
        mail: new FormControl(customer.mail, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required]),
        // salary: new FormControl('', [Validators.required]),
      });
    });
  }


  getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  onSubmit(id: number) {
    const customer = this.customerUpdate.value;
    this.customerService.updateCustomer(id, customer);
    alert('Cập nhật thành công');
  }

  ngOnInit(): void {
  }


}
