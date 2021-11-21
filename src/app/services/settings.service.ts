import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkcss = document.querySelector('#theme');

  constructor() {
    const tema =
      localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.linkcss.setAttribute('href', tema);

  }
  changeTheme(theme: string) {
    const href = `./assets/css/colors/${theme}.css`;
    this.linkcss.setAttribute('href', href);
    localStorage.setItem('theme', href);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links =document.querySelectorAll('.selector');
    const url = this.linkcss.getAttribute('href');

    links.forEach(element => {
      element.classList.remove('working');
      const cssUrl = `./assets/css/colors/${element.getAttribute('data-theme')}.css`
      if (url === cssUrl) {
        element.classList.add('working')
      }

    });
  }
}