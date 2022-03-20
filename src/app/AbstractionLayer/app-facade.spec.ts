import { TestBed } from '@angular/core/testing';
import { AppStateService } from '../CoreLayer/app-state.service';
import { BackendApiService } from '../CoreLayer/backend-api.service';
import { AppFacade } from './app-facade';

describe('AppFacade', () => {
  let apiService: BackendApiService;
  let appState: AppStateService;

  let appFacade: AppFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //service = TestBed.inject(BackendApiService);
  });

  it('should create an instance', () => {
    const backendApiSpy = jasmine.createSpyObj('BackendApiService', ['saveToLocalStorage','loadFromLocalStorage','getViewItems$']);
    const appStateSpy = jasmine.createSpyObj('AppStateService', ['getViewItems','getViewItems$','updateViewItem','setViewItems']);

    appFacade = new AppFacade(appStateSpy,backendApiSpy);
    expect(appFacade).toBeTruthy();
  });
});
