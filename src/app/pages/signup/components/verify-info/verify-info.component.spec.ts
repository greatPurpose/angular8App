import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyInfoComponent } from './verify-info.component';

describe('VerifyInfoComponent', () => {
  let component: VerifyInfoComponent;
  let fixture: ComponentFixture<VerifyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
