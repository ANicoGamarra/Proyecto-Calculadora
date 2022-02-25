import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  @Input() btnInfo:any; // decorate the property with @Input()

 

  constructor() { }

  ngOnInit(): void {
  }

}
