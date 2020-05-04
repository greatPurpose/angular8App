import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialScoresComponent } from './initial-scores.component';

describe('InitialScoresComponent', () => {
  let component: InitialScoresComponent;
  let fixture: ComponentFixture<InitialScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
