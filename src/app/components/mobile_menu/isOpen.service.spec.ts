/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsOpenService } from './isOpen.service';

describe('Service: IsOpen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsOpenService]
    });
  });

  it('should ...', inject([IsOpenService], (service: IsOpenService) => {
    expect(service).toBeTruthy();
  }));
});
