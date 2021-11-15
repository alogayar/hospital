import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { GraficaDonutComponent } from './grafica-donut/grafica-donut.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [IncrementadorComponent, GraficaDonutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [IncrementadorComponent, GraficaDonutComponent]
})
export class ComponentsModule { }
