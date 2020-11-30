import { Component, OnInit, Input } from '@angular/core';
import {Destination} from '../models/destination.model'

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})

export class DestinationComponent implements OnInit {
  @Input() destino: Destination;
  
  constructor() {}
  ngOnInit(): void {
  }
}


