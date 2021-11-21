import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mainMenu: any[] = [];

  constructor(private sidebarService: SidebarService) { 
    this.mainMenu = sidebarService.getMenu();
  }

  ngOnInit(): void {
  }

}
