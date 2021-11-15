import { Component, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styles: [
  ]
})
export class GraficaDonutComponent {
  @Input() titulo:string = 'Sin titulo';
  @Input('datos') doughnutChartData: MultiDataSet = [
    [250, 130, 70],
  ];
  @Input('etiquetas') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  
  constructor(){
  }

}


