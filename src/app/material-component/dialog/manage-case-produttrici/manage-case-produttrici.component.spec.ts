import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCaseProduttriciComponent } from './manage-case-produttrici.component';

describe('ManageCaseProduttriciComponent', () => {
  let component: ManageCaseProduttriciComponent;
  let fixture: ComponentFixture<ManageCaseProduttriciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCaseProduttriciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCaseProduttriciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
