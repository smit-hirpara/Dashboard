/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WindowSizeService } from './window-size.service';

describe('Service: WindowSize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowSizeService]
    });
  });

  it('should ...', inject([WindowSizeService], (service: WindowSizeService) => {
    expect(service).toBeTruthy();
  }));
});
