import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  constructor() { }

  getBrowserSize() {
    let w: any, h: any;

    if (typeof window.innerWidth != 'undefined') {
      w = window.innerWidth; //other browsers
      h = window.innerHeight;
    }
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
      w = document.documentElement.clientWidth;
      h = document.documentElement.clientHeight;
    }
    else {
      w = document.body.clientWidth;
      h = document.body.clientHeight;
    }
    return { 'width': w, 'height': h };
  }


  PcView: boolean = true;
  mobileView: boolean = false;
  windowSize() {
    if (parseInt(this.getBrowserSize().width) < 1024) {
      this.PcView = false;
      this.mobileView = true;
    }
    else {
      this.PcView = true;
      this.mobileView = false;
    }
  }
}
