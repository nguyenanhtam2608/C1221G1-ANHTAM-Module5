import {Injectable} from '@angular/core';
import {Translate} from '../model/translate';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  translate: Translate[] = [
    {
      id: 1,
      dictionary: 'hello',
      translate: 'xin chào '
    }, {
      id: 2,
      dictionary: 'goodbye',
      translate: ' tạm biệt '
    },
    {
      id: 3,
      dictionary: 'car',
      translate: 'Xe '
    }, {
      id: 4,
      dictionary: 'clock',
      translate: 'Đồng hồ  '
    },
    {
      id: 4,
      dictionary: 'fish',
      translate: 'Cá '
    }
  ];

  getAll() {
    return this.translate;
  }

  findById(id: number) {
    return this.translate.find(translate => translate.id === id);
  }

  constructor() {
  }
}
