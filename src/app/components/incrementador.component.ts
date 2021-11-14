import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn btn-primary'
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) return this.valorSalida.emit(100);
    if (this.progreso <= 0 && valor < 0) return this.valorSalida.emit(0);

    this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso);
  }

  editaValor(valor: number) {
    if (valor > 100) {      
      this.progreso = 100;
      console.log(this.progreso)
    }
    else {
      if (valor < 0) {
        this.progreso = 0;
      }
      else {
        this.progreso = valor;
      }
    }
    this.valorSalida.emit(this.progreso);
  }

}
