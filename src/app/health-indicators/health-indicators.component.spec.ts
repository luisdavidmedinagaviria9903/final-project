import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIndicatorsComponent } from './health-indicators.component';

describe('HealthIndicatorsComponent', () => {
  let component: HealthIndicatorsComponent;
  let fixture: ComponentFixture<HealthIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
