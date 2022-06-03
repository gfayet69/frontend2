import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseigneUserComponent } from './enseigne-user.component';

describe('EnseigneUserComponent', () => {
  let component: EnseigneUserComponent;
  let fixture: ComponentFixture<EnseigneUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseigneUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseigneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
