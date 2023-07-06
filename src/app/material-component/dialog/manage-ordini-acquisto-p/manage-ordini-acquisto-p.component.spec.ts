import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrdiniAcquistoPComponent } from './manage-ordini-acquisto-p.component';

describe('ManageOrdiniAcquistoPComponent', () => {
  let component: ManageOrdiniAcquistoPComponent;
  let fixture: ComponentFixture<ManageOrdiniAcquistoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOrdiniAcquistoPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrdiniAcquistoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
