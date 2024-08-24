import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorActionComponent } from './calculator-action.component';

describe('CalculatorActionComponent', () => {
  let component: CalculatorActionComponent;
  let fixture: ComponentFixture<CalculatorActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
