import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../service/translate.service';
import {Translate} from '../../model/translate';

@Component({
  selector: 'app-translate-list',
  templateUrl: './translate-list.component.html',
  styleUrls: ['./translate-list.component.css']
})
export class TranslateListComponent implements OnInit {
  words: Translate[] = [];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.words = this.translateService.getAll();
  }

}
