import { TestBed } from '@angular/core/testing';

import { LoggerLibService } from './logger-lib.service';

describe('LoggerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerLibService = TestBed.get(LoggerLibService);
    expect(service).toBeTruthy();
  });
});
