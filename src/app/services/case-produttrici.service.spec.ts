import { TestBed } from '@angular/core/testing';

import { CaseProduttriciService } from './case-produttrici.service';

describe('CaseProduttriciService', () => {
  let service: CaseProduttriciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseProduttriciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
