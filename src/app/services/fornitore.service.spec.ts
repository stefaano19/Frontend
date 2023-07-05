import { TestBed } from '@angular/core/testing';

import { FornitoreService } from './fornitore.service';

describe('FornitoreService', () => {
  let service: FornitoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornitoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
