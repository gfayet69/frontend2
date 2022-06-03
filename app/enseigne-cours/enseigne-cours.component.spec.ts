import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseigneCoursComponent } from './enseigne-cours.component';

describe('EnseigneCoursComponent', () => {
  let component: EnseigneCoursComponent;
  let fixture: ComponentFixture<EnseigneCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseigneCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseigneCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
