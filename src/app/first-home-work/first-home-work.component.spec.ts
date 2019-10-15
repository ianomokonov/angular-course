import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHomeWorkComponent } from './first-home-work.component';

describe('FirstHomeWorkComponent', () => {
  let component: FirstHomeWorkComponent;
  let fixture: ComponentFixture<FirstHomeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstHomeWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
