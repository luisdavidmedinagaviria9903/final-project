import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQueriesComponent } from './health-queries.component';

describe('HealthQueriesComponent', () => {
  let component: HealthQueriesComponent;
  let fixture: ComponentFixture<HealthQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthQueriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
