import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProdottiComponent } from './manage-prodotti.component';

describe('ManageProdottiComponent', () => {
  let component: ManageProdottiComponent;
  let fixture: ComponentFixture<ManageProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProdottiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
