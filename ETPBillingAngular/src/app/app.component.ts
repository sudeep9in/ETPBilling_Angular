import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    alert('Hiiii');
  }

  sidebarCollapseClick(event): void {
    event.preventDefault();
    $('#sidebar').toggleClass('active');
    $('#content').addClass('active');
  }
}
