import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FacilityService} from '../../service/facility/facility.service';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  id: number;
  facilityForm: FormGroup;

  constructor(private facilityService: FacilityService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id, [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern('^([A-Z][a-z]*)+(\\s[A-Z][a-z]*)*$')]),
        area: new FormControl(facility.poolSquare, [Validators.required, Validators.pattern('^\\+*\\d+$')]),
        rentalFee: new FormControl(facility.rentalFee, [Validators.required, Validators.pattern('^\\+*\\d+$')]),
        image: new FormControl(facility.image, [Validators.required]),
        maximumPeople: new FormControl(facility.maximumPeople, [Validators.required, Validators.pattern('^\\+*\\d+$')]),
        roomStandard: new FormControl(facility.roomStandard, [Validators.required]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        numberFloor: new FormControl(facility.numberFloor, [Validators.required]),
        description: new FormControl(facility.description, [Validators.required]),
      });
    });
  }

  getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  onSub(id: number) {
    const customer = this.facilityForm.value;
    this.facilityService.updateFacility(id, customer);
    alert('Cập nhật thành công');
  }

  ngOnInit() {
  }


}
