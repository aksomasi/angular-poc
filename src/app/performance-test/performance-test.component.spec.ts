import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTestComponent } from './performance-test.component';

describe('PerformanceTestComponent', () => {
  let component: PerformanceTestComponent;
  let fixture: ComponentFixture<PerformanceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
