import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnseigneComponent } from './edit-enseigne.component';

describe('EditEnseigneComponent', () => {
  let component: EditEnseigneComponent;
  let fixture: ComponentFixture<EditEnseigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEnseigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnseigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
