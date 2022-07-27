/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreServiceService } from './storeService.service';

describe('Service: StoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreServiceService]
    });
  });

  it('should ...', inject([StoreServiceService], (service: StoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
