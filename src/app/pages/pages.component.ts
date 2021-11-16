import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  linkcss = document.querySelector('#theme');

  constructor() {}

  ngOnInit(): void {
    const tema =
      localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.linkcss.setAttribute('href',tema);
  }
}
