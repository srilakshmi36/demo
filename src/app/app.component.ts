import { Component, OnInit } from '@angular/core';
import { initJsStore } from './service/idb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IndexDB';
  ngOnInit() {
    initJsStore();
   console.log('jsstore connected');
 } 
}
