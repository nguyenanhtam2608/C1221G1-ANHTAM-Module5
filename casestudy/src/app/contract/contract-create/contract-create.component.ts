import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor() {
  }

  validateContract = new FormGroup({
    id: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')])

  });

  ngOnInit() {
  }

  onSub() {
    alert('thành công');
  }
}
