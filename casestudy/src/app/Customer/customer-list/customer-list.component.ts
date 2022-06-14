import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customer = this.customerService.getAll();
  }


}

