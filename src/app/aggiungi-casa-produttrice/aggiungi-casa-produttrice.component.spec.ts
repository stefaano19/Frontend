import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiCasaProduttriceComponent } from './aggiungi-casa-produttrice.component';

describe('AggiungiCasaProduttriceComponent', () => {
  let component: AggiungiCasaProduttriceComponent;
  let fixture: ComponentFixture<AggiungiCasaProduttriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiCasaProduttriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiCasaProduttriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
