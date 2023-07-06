import { TestBed } from '@angular/core/testing';

import { OordineAcquistoService } from './oordine-acquisto.service';

describe('OordineAcquistoService', () => {
  let service: OordineAcquistoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OordineAcquistoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
