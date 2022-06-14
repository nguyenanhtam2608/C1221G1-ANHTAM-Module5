import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor() {
  }

  facilityArray: Facility[] = [
    {
      id: 1,
      name: 'River ',
      image: '/assets/img/rooms/room1.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 1500000.0
    },
    {
      id: 2,
      name: 'River ',
      image: '/assets/img/rooms/room2.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 1000000.0
    },
    {
      id: 3,
      name: 'Villa ',
      image: '/assets/img/rooms/room3.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 2500000.0
    },
    {
      id: 4,
      name: 'Room ',
      image: '/assets/img/rooms/room4.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 1500000.0
    },
    {
      id: 5,
      name: 'House ',
      image: '/assets/img/rooms/room5.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 1500000.0
    },
    {
      id: 6,
      name: 'Villa',
      image: '/assets/img/rooms/room6.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 3500000.0
    }
  ];

  getAll() {
    return this.facilityArray;
  }

  saveFacility(facility) {
    this.facilityArray.push(facility);
  }

  findById(id: number) {
    return this.facilityArray.find(facility => facility.id === id);
  }

  updateFacility(id: number, facility: Facility) {
    for (let i = 0; i < this.facilityArray.length; i++) {
      // @ts-ignore
      if (this.facilityArray[i].id === id) {
        this.facilityArray[i] = facility;
      }
    }
  }

  // deleteCustomer(id: number) {
  //   // tslint:disable-next-line:no-shadowed-variable
  //   this.customerArray = this.customerArray.filter(customer => {
  //     // @ts-ignore
  //     return customer.id !== id;
  //   });
  // }

}
