import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesUseComponent } from './sales-use.component';

describe('SalesUseComponent', () => {
  let component: SalesUseComponent;
  let fixture: ComponentFixture<SalesUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
