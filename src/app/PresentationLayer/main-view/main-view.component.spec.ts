import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackendApiService } from 'src/app/CoreLayer/backend-api.service';
import { AppFacade } from 'src/app/AbstractionLayer/app-facade';
import { MainViewComponent } from './main-view.component';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewComponent ],
      providers : [
        { provide: AppFacade, useValue: jasmine.createSpyObj('AppFacade',['reloadViewItems','updateViewItem','getViewItems$'])}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
