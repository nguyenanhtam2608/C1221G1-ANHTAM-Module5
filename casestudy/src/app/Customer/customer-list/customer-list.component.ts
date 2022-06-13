import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];

  constructor() {
    this.customer.push(
      {
        id: '1',
        name: 'Nguyễn Anh Tâm ',
        dayOfBirth: '2002-07-01',
        gender: '1',
        nationalId: '344343432',
        phone: '0987654321',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {id: 1, name: 'Kim cương'}
      }
      ,
      {
        id: '2',
        name: 'Nguyễn Anh Tâm ',
        dayOfBirth: '2002-07-01',
        gender: '1',
        nationalId: '344343432',
        phone: '0987654321',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 2,
          name: 'Kim cương'
        }
      },
      {
        id: '3',
        name: 'Nguyễn Anh Tâm ',
        dayOfBirth: '2002-07-01',
        gender: '1',
        nationalId: '344343432',
        phone: '0987654321',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 1,
          name: 'Kim cương'
        }
      },
      {
        id: '4',
        name: 'Nguyễn Anh Tâm ',
        dayOfBirth: '2002-07-01',
        gender: '1',
        nationalId: '344343432',
        phone: '0987654321',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 1,
          name: 'Kim cương'
        }
      },
      {
        id: '5',
        name: 'Nguyễn Anh Tâm ',
        dayOfBirth: '2002-07-01',
        gender: '1',
        nationalId: '344343432',
        phone: '0987654321',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 1,
          name: 'Kim cương'
        }
      }
    );
  }

  ngOnInit() {
  }


}

