import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiOrdineAutoComponent } from './aggiungi-ordine-auto.component';

describe('AggiungiOrdineAutoComponent', () => {
  let component: AggiungiOrdineAutoComponent;
  let fixture: ComponentFixture<AggiungiOrdineAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiOrdineAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiOrdineAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
