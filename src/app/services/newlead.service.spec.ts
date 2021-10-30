import { TestBed } from '@angular/core/testing';

import { NewleadService } from './newlead.service';

describe('NewleadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewleadService = TestBed.get(NewleadService);
    expect(service).toBeTruthy();
  });
});
