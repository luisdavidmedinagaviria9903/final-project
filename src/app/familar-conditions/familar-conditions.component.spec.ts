import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilarConditionsComponent } from './familar-conditions.component';

describe('FamilarConditionsComponent', () => {
  let component: FamilarConditionsComponent;
  let fixture: ComponentFixture<FamilarConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilarConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilarConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
