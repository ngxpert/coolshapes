import { TestBed } from '@angular/core/testing';

import { CoolshapesService } from './coolshape.service';

describe('CoolshapesService', () => {
  let service: CoolshapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoolshapesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
