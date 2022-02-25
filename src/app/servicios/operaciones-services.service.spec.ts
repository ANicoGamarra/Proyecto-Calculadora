import { TestBed } from '@angular/core/testing';

import { OperacionesServicesService } from './operaciones-services.service';

describe('OperacionesServicesService', () => {
  let service: OperacionesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
