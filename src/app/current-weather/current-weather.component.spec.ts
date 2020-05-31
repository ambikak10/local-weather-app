import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClimateService } from '../climate.service'

import { CurrentWeatherComponent } from './current-weather.component';
import { HttpClientTestingModule } from '@angular/common/http/Testing';
import { ClimateFakeService } from '../climate.fake.sevice';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
      // imports:[
      //   HttpClientTestingModule
      // ],
      providers:[
        {
          provide: ClimateService, useClass: ClimateFakeService
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
