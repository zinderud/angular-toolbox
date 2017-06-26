import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcProgressComponent } from './arc-progress.component';

describe('ArcProgressComponent', () => {
  let component: ArcProgressComponent;
  let fixture: ComponentFixture<ArcProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
