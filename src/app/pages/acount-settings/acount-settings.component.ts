import { Component } from '@angular/core';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent  {

  linkcss = document.querySelector('#theme');

  changeTheme(theme: string){
    const href = `./assets/css/colors/${theme}.css`;
    this.linkcss.setAttribute('href', href);
    localStorage.setItem('theme', href);

  }

}
