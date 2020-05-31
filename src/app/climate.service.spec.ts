import { TestBed } from '@angular/core/testing';

import { ClimateService } from './climate.service';
import { HttpClientModule } from '@angular/common/http';

describe('ClimateService', () => {
  let service: ClimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({     imports:[
      HttpClientModule
    ]});
    service = TestBed.inject(ClimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
