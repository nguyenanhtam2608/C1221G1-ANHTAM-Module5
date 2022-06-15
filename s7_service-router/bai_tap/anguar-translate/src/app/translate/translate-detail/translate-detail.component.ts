import {Component, OnInit} from '@angular/core';
import {Translate} from '../../model/translate';
import {TranslateService} from '../../service/translate.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-translate-detail',
  templateUrl: './translate-detail.component.html',
  styleUrls: ['./translate-detail.component.css']
})
export class TranslateDetailComponent implements OnInit {
  // formTranslate: FormGroup;
  id: number;
  words: Translate;

  // translate: Translate[] = [];

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      // const translate = this.getTranslate(this.id);
      // this.formTranslate = new FormGroup({
      //   id: new FormControl(translate.id),
      //   dictionary: new FormControl(translate.dictionary),
      //   translate: new FormControl(translate.translate)
      // });
      this.words = this.translateService.findById(this.id);
    });
  }


  ngOnInit() {
  }

  getTranslate(id: number) {
    return this.translateService.findById(id);
  }

}
