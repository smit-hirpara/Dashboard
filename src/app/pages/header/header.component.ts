import { inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    this._windowSize.windowSize();
  }

  constructor(public _windowSize: WindowSizeService) { }

  searchField: boolean = false;

}
