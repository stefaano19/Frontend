import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiOrdineProdottiComponent } from './aggiungi-ordine-prodotti.component';

describe('AggiungiOrdineProdottiComponent', () => {
  let component: AggiungiOrdineProdottiComponent;
  let fixture: ComponentFixture<AggiungiOrdineProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiOrdineProdottiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiOrdineProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
