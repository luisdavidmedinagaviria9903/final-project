import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalControlComponent } from './medical-control.component';

describe('MedicalControlComponent', () => {
  let component: MedicalControlComponent;
  let fixture: ComponentFixture<MedicalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
