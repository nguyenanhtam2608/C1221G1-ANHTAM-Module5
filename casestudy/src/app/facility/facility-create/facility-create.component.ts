import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  constructor() {
  }

  facilityForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
    name: new FormControl('', [Validators.required, Validators.pattern('^([A-Z][a-z]*)+(\\s[A-Z][a-z]*)*$')]),
    area: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),
    rentalFee: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),
    image: new FormControl('', [Validators.required]),
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
    alert('Thành công');
  }
}
