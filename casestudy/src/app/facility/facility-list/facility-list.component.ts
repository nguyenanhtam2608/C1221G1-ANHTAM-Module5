import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];


  constructor() {
    this.facility.push({
      id: 1,
      name: 'House ',
      image: '/assets/img/rooms/room1.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 6500000.0
    });
    this.facility.push({
      id: 1,
      name: 'Villa ',
      image: '/assets/img/rooms/room2.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 5500000.0
    });
    this.facility.push({
      id: 1,
      name: 'Room ',
      image: '/assets/img/rooms/room3.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 8000000.0
    });
    this.facility.push({
      id: 1,
      name: 'Villa ',
      image: '/assets/img/rooms/room4.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 9000000.0
    });
    this.facility.push({
      id: 1,
      name: 'House ',
      image: '/assets/img/rooms/room5.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 6000000.0
    });
    this.facility.push({
      id: 1,
      name: 'Villa ',
      image: '/assets/img/rooms/room6.jpg',
      rentType: {
        id: 1,
        name: 'day'
      },
      rentalFee: 2500000.0
    });
  }

  ngOnInit() {
  }

}
