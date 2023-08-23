import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _windowSize: WindowSizeService) { }

  ngOnInit() {
  }

  navtItemList = [
    {
      name: 'Reuse-Table', icon: 'bi bi-list', path: 'home'
    },
    {
      name: 'Flags', icon: 'bi bi-flag'
    },
    {
      name: 'Profile', icon: 'bi bi-building'
    },
    {
      name: 'Directors', icon: 'bi bi-people'
    },
    {
      name: 'Charges', icon: 'bi bi-coin'
    },
    {
      name: 'Rating', icon: 'bi bi-stars'
    },
    {
      name: 'Financials', icon: 'bi bi-graph-up-arrow'
    },
    {
      name: 'Auditors', icon: 'bi bi-plus-slash-minus'
    },
    {
      name: 'Peers', icon: 'bi bi-building'
    },
    {
      name: 'Shareholding', icon: 'bi bi-pie-chart-fill'
    },
    {
      name: 'Associates', icon: 'bi bi-diagram-3'
    },
    {
      name: 'Litigations/Default', icon: 'bi bi-diagram-2'
    },
    {
      name: 'Compliance', icon: 'bi bi-file-text'
    },
    {
      name: 'News', icon: 'bi bi-file-earmark-medical', status: 'NEW'
    },
    {
      name: 'Conosent', icon: 'bi bi-keyboard', status: 'BETA'
    },
  ];
}
