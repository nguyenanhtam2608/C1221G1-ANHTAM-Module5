import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  idC: number;
  nameC: string;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customer = this.customerService.getAll();
  }

  showDeleteModal(id: number, name: string) {
    this.idC = id;
    this.nameC = name;
  }

  deleteCustomer(idDel: number) {
    this.customerService.deleteCustomer(idDel);
  }

}

