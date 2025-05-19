import { TestBed } from '@angular/core/testing';

import { GetCarListService } from './get-car-list.service';

describe('GetCarListService', () => {
  let service: GetCarListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCarListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
