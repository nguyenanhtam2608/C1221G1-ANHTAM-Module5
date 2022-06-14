import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  id: number;
  customerUpdate: FormGroup;
  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) {
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

  ngOnInit() {
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id);
    this.router.navigate(['/customer/list']);
  }
}
