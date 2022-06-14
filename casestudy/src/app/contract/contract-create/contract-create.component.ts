import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract/contract.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor(private contractService: ContractService) {
  }

  validateContract = new FormGroup({
    id: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),


  });

  ngOnInit() {
  }

  onSub() {
    const contract = this.validateContract.value;
    this.contractService.saveContract(contract);
    this.validateContract.reset();
    alert('Tạo mới thành công ');
  }
}
