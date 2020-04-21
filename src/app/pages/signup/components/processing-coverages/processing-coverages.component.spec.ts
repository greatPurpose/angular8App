import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingCoveragesComponent } from './processing-coverages.component';

describe('ProcessingCoveragesComponent', () => {
  let component: ProcessingCoveragesComponent;
  let fixture: ComponentFixture<ProcessingCoveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingCoveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingCoveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
