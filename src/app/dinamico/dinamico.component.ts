import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../main/home/home.component';
import { DemosComponent } from '../demos/demos.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [
    HomeComponent, DemosComponent,
  ],
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Demos', componente: DemosComponent },
    { texto: 'Inicio', componente: HomeComponent },
  ];
  seleccionado = this.menu[0].componente;

  constructor() { }

  ngOnInit() {
  }

  selecciona(indice: number) {
    this.seleccionado = this.menu[indice].componente;
  }
}
