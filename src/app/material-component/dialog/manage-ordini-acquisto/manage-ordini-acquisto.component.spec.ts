import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrdiniAcquistoComponent } from './manage-ordini-acquisto.component';

describe('ManageOrdiniAcquistoComponent', () => {
  let component: ManageOrdiniAcquistoComponent;
  let fixture: ComponentFixture<ManageOrdiniAcquistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOrdiniAcquistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrdiniAcquistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
