import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvrageConsultationComponent } from './ouvrage-consultation.component';

describe('OuvrageConsultationComponent', () => {
  let component: OuvrageConsultationComponent;
  let fixture: ComponentFixture<OuvrageConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuvrageConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvrageConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
