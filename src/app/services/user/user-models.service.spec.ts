import { TestBed } from '@angular/core/testing';

import { UserModelsService } from './user-models.service';

describe('UserModelsService', () => {
  let service: UserModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
