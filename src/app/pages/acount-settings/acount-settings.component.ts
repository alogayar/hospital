import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent implements OnInit {

  constructor() { 
    console.log('aaaaaaaaa')
  }

  ngOnInit(): void {
  }

  changeTheme(theme: string){
    console.log('aaa')

  }

}
