import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  del:string = "DEL";
  simboloMas:string = "+";
  simboloMenos:string = "-";
  simboloPunto:string = ".";
  simboloDivision:string = "/";
  simboloMultiplicacion:string = "*";
  simboloReset:string = "RESET";
  simboloIgual:string = "=";


  constructor() { }

  ngOnInit(): void {
  }

}
