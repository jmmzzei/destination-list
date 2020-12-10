import { Component, OnInit } from '@angular/core';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  destinos: Destination[];

  constructor() {
    this.destinos = [];
  }

  save(nombre: string, url: string): boolean {
    this.destinos.push(new Destination(nombre, url));
    console.log(this.destinos);
    return false;
  }

  ngOnInit(): void {}

  chosed(d: Destination) {
    this.destinos.forEach((e) => {
      e.setSelected(false);
    });
    d.setSelected(true);
  }
}
