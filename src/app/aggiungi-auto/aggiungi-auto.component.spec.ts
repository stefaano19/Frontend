import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiAutoComponent } from './aggiungi-auto.component';

describe('AggiungiAUTOComponent', () => {
  let component: AggiungiAutoComponent;
  let fixture: ComponentFixture<AggiungiAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
