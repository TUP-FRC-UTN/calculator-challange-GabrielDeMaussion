import { Component } from '@angular/core';
import { CalculatorActionComponent } from "../calculator-action/calculator-action.component";

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalculatorActionComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})

export class CalculatorViewComponent {
  value1: number = 0;
  value2: number = 0;
  actualResult: number = 0;

  obtenerResult(evento: number){
    this.actualResult = evento;
  }

  limpiar(evento: boolean){
    if(evento){
      this.value1 = 0;
      this.value2 = 0;
      this.actualResult = 0;
    }
  }

  updateValue1(event: any){
    this.value1 = event.target.value;
  }

  updateValue2(event: any){
    this.value2 = event.target.value;
  }


}
