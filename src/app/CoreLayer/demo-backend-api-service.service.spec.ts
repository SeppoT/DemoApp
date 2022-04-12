import { TestBed } from '@angular/core/testing';

import { DemoBackendApiServiceService } from './demo-backend-api-service.service';

describe('DemoBackendApiServiceService', () => {
  let service: DemoBackendApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoBackendApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
