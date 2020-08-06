import { TestBed } from '@angular/core/testing';

import { WikiseviceService } from './wikisevice.service';

describe('WikiseviceService', () => {
  let service: WikiseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
