import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contract: Contract[] = [];

  constructor() {
    // @ts-ignore
    this.contract.push(   {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 1000000,
      customer: {
        id: '1',
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: '0',
        nationalId: '643431213',
        phone: '0905423362',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 5,
          name: 'Member'
        }
      },
      facility: {
        id: 3,
        code: 'DV-0003',
        name: 'Room Twin 01'
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });
    this.contract.push(   {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 1000000,
      customer: {
        id: '1',
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: '0',
        nationalId: '643431213',
        phone: '0905423362',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 5,
          name: 'Member'
        }
      },
      facility: {
        id: 3,
        code: 'DV-0003',
        name: 'Room Twin 01'
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });
    this.contract.push(   {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 1000000,
      customer: {
        id: '1',
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: '0',
        nationalId: '643431213',
        phone: '0905423362',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 5,
          name: 'Member'
        }
      },
      facility: {
        id: 3,
        code: 'DV-0003',
        name: 'Room Twin 01'
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });
    this.contract.push(   {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 1000000,
      customer: {
        id: '1',
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: '0',
        nationalId: '643431213',
        phone: '0905423362',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 5,
          name: 'Member'
        }
      },
      facility: {
        id: 3,
        code: 'DV-0003',
        name: 'Room Twin 01'
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });
    this.contract.push(   {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 1000000,
      customer: {
        id: '1',
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: '0',
        nationalId: '643431213',
        phone: '0905423362',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 5,
          name: 'Member'
        }
      },
      facility: {
        id: 3,
        code: 'DV-0003',
        name: 'Room Twin 01'
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });
    this.contract.push(   {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 1000000,
      customer: {
        id: '1',
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: '0',
        nationalId: '643431213',
        phone: '0905423362',
        mail: 'thihao07@gmail.com',
        address: '23 Nguyễn Hoàng, Đà Nẵng',
        customerType: {
          id: 5,
          name: 'Member'
        }
      },
      facility: {
        id: 3,
        code: 'DV-0003',
        name: 'Room Twin 01'
      },
      serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
    });

  }

  ngOnInit() {
  }

}
