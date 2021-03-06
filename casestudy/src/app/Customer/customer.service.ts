import {Injectable} from '@angular/core';
import {Customer} from './model/customer';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {delay, map} from 'rxjs/operators';

// const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerArray: Customer[] = [
    // {
    //   id: 1,
    //   name: 'Nguyễn Anh Tâm ',
    //   dayOfBirth: '2002-07-01',
    //   gender: 1,
    //   nationalId: '344343432',
    //   phone: '0987654321',
    //   mail: 'thihao07@gmail.com',
    //   address: '23 Nguyễn Hoàng, Đà Nẵng',
    //   customerType: {id: 1, name: 'Kim cương'}
    // }
    // ,
    // {
    //   id: 2,
    //   name: 'Nguyễn Anh Tâm ',
    //   dayOfBirth: '2002-07-01',
    //   gender: 1,
    //   nationalId: '344343432',
    //   phone: '0987654321',
    //   mail: 'thihao07@gmail.com',
    //   address: '23 Nguyễn Hoàng, Đà Nẵng',
    //   customerType: {
    //     id: 2,
    //     name: 'Kim cương'
    //   }
    // },
    // {
    //   id: 3,
    //   name: 'Nguyễn Anh Tâm ',
    //   dayOfBirth: '2002-07-01',
    //   gender: 0,
    //   nationalId: '344343432',
    //   phone: '0987654321',
    //   mail: 'thihao07@gmail.com',
    //   address: '23 Nguyễn Hoàng, Đà Nẵng',
    //   customerType: {
    //     id: 1,
    //     name: 'Kim cương'
    //   }
    // },
    // {
    //   id: 4,
    //   name: 'Nguyễn Anh Tâm ',
    //   dayOfBirth: '2002-07-01',
    //   gender: 0,
    //   nationalId: '344343432',
    //   phone: '0987654321',
    //   mail: 'thihao07@gmail.com',
    //   address: '23 Nguyễn Hoàng, Đà Nẵng',
    //   customerType: {
    //     id: 1,
    //     name: 'Kim cương'
    //   }
    // },
    // {
    //   id: 5,
    //   name: 'Nguyễn Anh Tâm ',
    //   dayOfBirth: '2002-07-01',
    //   gender: 0,
    //   nationalId: '344343432',
    //   phone: '0987654321',
    //   mail: 'thihao07@gmail.com',
    //   address: '23 Nguyễn Hoàng, Đà Nẵng',
    //   customerType: {
    //     id: 0,
    //     name: 'Kim cương'
    //   }
    // }

  ];

  // getAll() {
  //   return this.customerArray;
  // }


  // tslint:disable-next-line:no-shadowed-variable
  // saveCustomer(customer) {
  //   this.customerArray.push(customer);
  // }

  // findById(id: number) {
  //   // tslint:disable-next-line:no-shadowed-variable
  //   return this.customerArray.find(customer => customer.id === id);
  // }

  // updateCustomer(id: string, custome: Customer) {
  //   for (let i = 0; i < this.customerArray.length; i++) {
  //     // @ts-ignore
  //     if (this.customerArray[i].id === id) {
  //       this.customerArray[i] = custome;
  //     }
  //   }
  // }


  // deleteCustomer(idDel: number) {
  //   for (let i = 0; i < this.customerArray.length; i++) {
  //     // @ts-ignore
  //     if (this.customerArray[i].id === idDel) {
  //       this.customerArray.splice(i, 1);
  //     }
  //   }
  // }

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customer', customer);
  }


  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${'http://localhost:3000/customer'}/${id}`);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${'http://localhost:3000/customer'}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${'http://localhost:3000/customer'}/${id}`);
  }

  searchCustomerName(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${'http://localhost:3000'}/customer?name_like=${name}`);
  }
  //
  // checkIfIdExists(value: string) {
  //   // @ts-ignore
  //   return of(this.customerArray.some((a) => a === value)).pipe(
  //     delay(1000)
  //   );
  // }
}

