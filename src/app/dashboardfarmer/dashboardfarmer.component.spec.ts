import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfarmerComponent } from './dashboardfarmer.component';

describe('DashboardfarmerComponent', () => {
  let component: DashboardfarmerComponent;
  let fixture: ComponentFixture<DashboardfarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardfarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
