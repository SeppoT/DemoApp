import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMainViewComponent } from './demo-main-view.component';

describe('DemoMainViewComponent', () => {
  let component: DemoMainViewComponent;
  let fixture: ComponentFixture<DemoMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
