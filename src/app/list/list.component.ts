import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  destinos: string[];

  constructor() {
    this.destinos = ['Barcelona', 'Madrid', 'Sevilla'];
  }

  ngOnInit(): void {
  }
}
