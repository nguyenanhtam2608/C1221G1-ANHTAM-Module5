import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contract: Contract[] = [];

  constructor(private contractService: ContractService) {
  }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.contract = this.contractService.getAll();
  }

}
