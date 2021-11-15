import { Component, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styles: [
  ]
})
export class GraficaDonutComponent {
  @Input() titulo:string;
  @Input() data: MultiDataSet[];
  @Input() labels: Label[];

  
  constructor(){
    console.log(this.data);
  }

}


