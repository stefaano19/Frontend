import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiAppuntamentoComponent } from './aggiungi-appuntamento.component';

describe('AggiungiAppuntamentoComponent', () => {
  let component: AggiungiAppuntamentoComponent;
  let fixture: ComponentFixture<AggiungiAppuntamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiAppuntamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiAppuntamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
