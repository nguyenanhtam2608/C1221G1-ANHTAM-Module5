import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  customer1: Customer;
  idC: number;
  nameC: string;

  constructor(private customerService: CustomerService) {
    // this.customerService.getAll().subscribe(next => {
    //   this.customer = next;
    // });

  }

  ngOnInit() {
    this.getAll();
  }

  // getAll() {
  //   this.customer = this.customerService.getAll();
  // }
 getAll() {
  this.customerService.getAll().subscribe(customer1 => this.customer1 = customer1);
  }

  showDeleteModal(id: number, name: string) {
    this.idC = id;
    this.nameC = name;
  }

  deleteCustomer(idDel: number) {
    this.customerService.deleteCustomer(idDel);
  }

}

