import { TestBed } from '@angular/core/testing';

import { RouterChangeHandlerService } from './router-change-handler.service';

describe('RouterChangeHandlerService', () => {
  let service: RouterChangeHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterChangeHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
