import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit, OnDestroy {

  public subs$: Subscription;

  constructor() {


  }
  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  ngOnInit(): void {
    // this.getUsuarios()
    //   .then(usuarios => console.log(usuarios));
  this.subs$ = this.getIntervalo().subscribe(console.log)
  }


  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users?page=1')
        .then(resp => resp.json())
        .then(data => resolve(data.data));
    })
  }

  retornaObservable() {
    let i: number = 0;
    return new Observable(observer => {
      let i = -1;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i)
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error(i)
        }

      }, 1000)
    })
  }

  getIntervalo() {
    return interval(1000).pipe(
      take(42),
      map(data => data + 3),
      filter(data => data % 2 == 0 )
    )
  }



}
