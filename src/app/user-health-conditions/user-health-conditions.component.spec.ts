import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHealthConditionsComponent } from './user-health-conditions.component';

describe('UserHealthConditionsComponent', () => {
  let component: UserHealthConditionsComponent;
  let fixture: ComponentFixture<UserHealthConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHealthConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHealthConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
