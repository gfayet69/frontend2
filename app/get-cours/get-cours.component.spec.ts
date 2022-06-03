import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoursComponent } from './get-cours.component';

describe('GetCoursComponent', () => {
  let component: GetCoursComponent;
  let fixture: ComponentFixture<GetCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
