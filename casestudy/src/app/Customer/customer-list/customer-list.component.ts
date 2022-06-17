import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {
  // @ts-ignore
  @ViewChild('nameSearch') nameSearch: ElementRef;
  customer: Customer[] = [];
  idC: string;
  nameC: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.searchCustomerName('').subscribe(customers => this.customer = customers,
      () => {
      });
    console.log(this.customer);
  }

  //
  // getAll() {
  //   this.customerService.getAll().subscribe(customer => this.customer = customer);
  // }

  showDeleteModal(id: string, name: string) {
    this.idC = id;
    this.nameC = name;
  }

  deleteCustomer(idDel: string) {
    this.customerService.deleteCustomer(idDel).subscribe(() => {
        this.ngOnInit();
      }, error => alert('ERROR')
    );
  }

  searchCustomerName() {
    console.log(this.nameSearch.nativeElement.value);
    this.customerService.searchCustomerName(this.nameSearch.nativeElement.value).subscribe(customers => {
        this.customer = customers;
      }
    );
  }

}

