import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemBoxComponent } from './view-item-box.component';

describe('ViewItemBoxComponent', () => {
  let component: ViewItemBoxComponent;
  let fixture: ComponentFixture<ViewItemBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
