import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      label: 'Administracion',
      url: '',
      icon: 'mdi mdi-gauge',
      sumMenu: [
        {
          label: 'Promesas',
          url: 'promesas'
        },
        {
          label: 'Observables',
          url: 'observables'
        },
        {
          label: 'Usuario',
          url: 'settings'
        },
        {
          label: 'Rol',
          url: 'rol'
        }

      ]
    }
  ];
  getMenu() {
    return this.menu;
  }

  constructor() { }
}
