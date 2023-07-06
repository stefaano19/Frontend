import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiProdottoComponent } from './aggiungi-prodotto.component';

describe('AggiungiProdottoComponent', () => {
  let component: AggiungiProdottoComponent;
  let fixture: ComponentFixture<AggiungiProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiProdottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
