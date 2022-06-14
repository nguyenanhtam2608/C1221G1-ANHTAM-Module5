import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility/facility.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  constructor(private facilityService: FacilityService) {
  }

  facilityForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
    name: new FormControl('', [Validators.required, Validators.pattern('^([A-Z][a-z]*)+(\\s[A-Z][a-z]*)*$')]),
    area: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),
    rentalFee: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),
    image: new FormControl('https://gocyeube.com/wp-content/uploads/2022/05/hinh-anh-hacker-7-mau-min-450x800.jpg', [Validators.required]),
    maximumPeople: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),
    roomStandard: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    numberFloor: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),

  });


  ngOnInit() {
  }


  onSub() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
  }
}
