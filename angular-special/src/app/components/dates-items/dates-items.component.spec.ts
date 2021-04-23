import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesItemsComponent } from './dates-items.component';

describe('DatesItemsComponent', () => {
  let component: DatesItemsComponent;
  let fixture: ComponentFixture<DatesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
