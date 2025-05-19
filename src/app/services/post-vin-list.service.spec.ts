import { TestBed } from '@angular/core/testing';

import { PostVinListService } from './post-vin-list.service';

describe('PostVinListService', () => {
  let service: PostVinListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostVinListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
