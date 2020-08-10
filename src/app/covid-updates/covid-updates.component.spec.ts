import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidUpdatesComponent } from './covid-updates.component';

describe('CovidUpdatesComponent', () => {
  let component: CovidUpdatesComponent;
  let fixture: ComponentFixture<CovidUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
