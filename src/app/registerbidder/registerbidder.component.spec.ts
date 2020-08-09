import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbidderComponent } from './registerbidder.component';

describe('RegisterbidderComponent', () => {
  let component: RegisterbidderComponent;
  let fixture: ComponentFixture<RegisterbidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
