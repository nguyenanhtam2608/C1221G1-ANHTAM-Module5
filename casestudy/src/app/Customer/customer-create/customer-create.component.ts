import {Component, NgModule, OnInit} from '@angular/core';
import {AbstractControl, Form, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CustomerService} from '../customer.service';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {CustomerTypeService} from '../customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
  // providers: [CustomerService]
})
export class CustomerCreateComponent implements OnInit {

  customerCreate: FormGroup;

  customer: Customer[] = [];
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    // console.log(customerService);
    this.customerService.getAll().subscribe(customers => {
      this.customer = customers;

    });
    this.customerCreate = new FormGroup({
        id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
        name: new FormControl('', [Validators.required]),
        // tslint:disable-next-line:max-line-length
        dayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
        gender: new FormControl('', [Validators.required]),
        nationalId: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
        mail: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl('', [Validators.required]),
        salary: new FormControl('', [Validators.required]),
        customerType: new FormControl('', [Validators.required]),
      }
    );
  }


  onSubmit() {
    const customer = this.customerCreate.value;
    console.log(customer);
    this.customerService.saveCustomer(customer).subscribe(() => {
      alert('Tạo thành công ');
      this.router.navigateByUrl('customer/list');
      // tslint:disable-next-line:only-arrow-functions
      // setTimeout(function() {
      //     alert('Tạo thành công');
      //   }, 3000
      // );
      this.customerCreate.reset();
    });

  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  // validateId(customers: AbstractControl): ValidationErrors {
  //   let flag = true;
  //   const idCheck = customers.get('id').value;
  //   this.customerService.findById(idCheck).subscribe(customer => {
  //     // this.cus = customer;
  //     if (this.customer.includes(this.cus)) {
  //       flag = false;
  //     }
  //   });
  //   if (flag) {
  //     return null;
  //   } else {
  //     return {invalidId: true};
  //   }
  //
  // }


}
