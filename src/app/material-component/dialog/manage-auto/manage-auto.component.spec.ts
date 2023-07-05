import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAutoComponent } from './manage-auto.component';

describe('ManageAutoComponent', () => {
  let component: ManageAutoComponent;
  let fixture: ComponentFixture<ManageAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
