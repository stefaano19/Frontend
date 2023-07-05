import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppuntamentiComponent } from './manage-appuntamenti.component';

describe('ManageAppuntamentiComponent', () => {
  let component: ManageAppuntamentiComponent;
  let fixture: ComponentFixture<ManageAppuntamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAppuntamentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAppuntamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
