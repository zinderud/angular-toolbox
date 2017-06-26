import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSmallComponent } from './progress-small.component';

describe('ProgressSmallComponent', () => {
  let component: ProgressSmallComponent;
  let fixture: ComponentFixture<ProgressSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
