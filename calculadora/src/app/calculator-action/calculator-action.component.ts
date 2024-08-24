import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-action',
  standalone: true,
  imports: [],
  templateUrl: './calculator-action.component.html',
  styleUrl: './calculator-action.component.css'
})
export class CalculatorActionComponent {
  @Input() number1: number = 0;
  @Input() number2: number = 0;

  @Output() result = new EventEmitter<number>();
  @Output() reset = new EventEmitter<boolean>();

  sumaNumero(){
    this.result.emit(+this.number1 + +this.number2);
  }

  restaNumero(){
    this.result.emit(this.number1 - this.number2);
  }

  multiplicacionNumero(){
    this.result.emit(this.number1 * this.number2);
  }

  divisionNumero(){
    this.result.emit(this.number1 / this.number2);
  }

  potenciaNumero(){
    this.result.emit(Math.pow(this.number1, this.number2));
  }

  limpiarNumero(){
    this.reset.emit(true);
  }

}
