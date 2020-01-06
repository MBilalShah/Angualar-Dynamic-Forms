import { TestBed } from '@angular/core/testing';

import { NgDynamicFormsService } from './ng-dynamic-forms.service';

describe('NgDynamicFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDynamicFormsService = TestBed.get(NgDynamicFormsService);
    expect(service).toBeTruthy();
  });
});
