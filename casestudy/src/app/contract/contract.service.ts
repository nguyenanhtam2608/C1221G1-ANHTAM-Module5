import {Injectable} from '@angular/core';
import {Contract} from './model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() {
  }

  contractArray: Contract[] = [
    {
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 2000,
      total: 1000000,
      customer: {
        id: 1,
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: 0,
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
    },    {
      id: 3,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 2000,
      total: 1000000,
      customer: {
        id: 1,
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: 0,
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
    }, {
      id: 4,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 2000,
      total: 1000000,
      customer: {
        id: 1,
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: 0,
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
    }, {
      id: 5,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 2000,
      total: 1000000,
      customer: {
        id: 1,
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: 0,
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
    }, {
      id: 5,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 2000,
      total: 1000000,
      customer: {
        id: 1,
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: 0,
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
    }, {
      id: 6,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 2000,
      total: 1000000,
      customer: {
        id: 1,
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: 0,
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
    }, {
      id: 7,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 2000,
      total: 1000000,
      customer: {
        id: 1,
        name: 'Nguyễn Thị Hào',
        dayOfBirth: '1970-11-07',
        gender: 0,
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
    },
  ];

  getAll() {
    return this.contractArray;
  }

  saveContract(contract) {
    this.contractArray.push(contract);
  }

  findById(id: number) {
    return this.contractArray.find(contract => contract.id === id);
  }

  deleteContract(idDel: number) {
    for (let i = 0; i < this.contractArray.length; i++) {
      // @ts-ignore
      if (this.contractArray[i].id === idDel) {
        this.contractArray.splice(i, 1);
      }
    }
  }
}
