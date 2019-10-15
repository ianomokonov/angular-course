import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHomeWorkComponent } from './second-home-work.component';

describe('SecondHomeWorkComponent', () => {
  let component: SecondHomeWorkComponent;
  let fixture: ComponentFixture<SecondHomeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondHomeWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
