import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurListComponent } from './editeur-list.component';

describe('EditeurListComponent', () => {
  let component: EditeurListComponent;
  let fixture: ComponentFixture<EditeurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
