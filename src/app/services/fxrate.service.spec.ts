import { TestBed } from '@angular/core/testing';

import { FxrateService } from './fxrate.service';

describe('FxrateService', () => {
  let service: FxrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FxrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
