/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpRequest } from './wikisearch.service';

describe('Service: HttpRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequest]
    });
  });

  it('should ...', inject([HttpRequest], (service: HttpRequest) => {
    expect(service).toBeTruthy();
  }));
});
