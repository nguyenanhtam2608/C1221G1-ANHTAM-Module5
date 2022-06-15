import {Component, OnInit} from '@angular/core';
import {Facility} from '../../contract/model/facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];
  idF: number;
  nameF: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facility = this.facilityService.getAll();
  }

  showDeleteModal(id: number, name: string) {
    this.idF = id;
    this.nameF = name;
  }

  deleteCustomer(idF: number) {
    this.facilityService.deleteFacility(idF);

  }
}
