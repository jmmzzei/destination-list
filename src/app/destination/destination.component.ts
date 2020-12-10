import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  @Input() destino: Destination;
  @Input() position: number;
  @Output() clicked: EventEmitter<Destination>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {}

  go(): boolean {
    this.clicked.emit(this.destino);
    return false;
  }
}
