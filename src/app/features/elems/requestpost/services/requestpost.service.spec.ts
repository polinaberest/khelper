import { TestBed } from '@angular/core/testing';

import { RequestPostService } from './requestpost.service';

describe('RequestPostService', () => {
  let service: RequestPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
