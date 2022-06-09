import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerCreateComponent } from './cutomer-create.component';

describe('CutomerCreateComponent', () => {
  let component: CutomerCreateComponent;
  let fixture: ComponentFixture<CutomerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
