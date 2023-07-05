import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFornitoriComponent } from './manage-fornitori.component';

describe('ManageFornitoriComponent', () => {
  let component: ManageFornitoriComponent;
  let fixture: ComponentFixture<ManageFornitoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFornitoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFornitoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
