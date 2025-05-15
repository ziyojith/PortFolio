import { TestBed } from '@angular/core/testing';

import { NodeitilityserviceService } from './nodeitilityservice.service';

describe('NodeitilityserviceService', () => {
  let service: NodeitilityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeitilityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
