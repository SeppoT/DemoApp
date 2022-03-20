import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { BackendApiService } from './backend-api.service';

describe('BackendApiService', () => {
  let service: BackendApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers :[
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient',['get'])}
      ]
    });
    service = TestBed.inject(BackendApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
