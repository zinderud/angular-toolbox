import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLargeComponent } from './progress-large.component';

describe('ProgressLargeComponent', () => {
  let component: ProgressLargeComponent;
  let fixture: ComponentFixture<ProgressLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
