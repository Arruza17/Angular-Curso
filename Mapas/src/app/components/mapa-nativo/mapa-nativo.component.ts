/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts"/>

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa-nativo',
  templateUrl: './mapa-nativo.component.html',
  styleUrls: ['./mapa-nativo.component.css']
})
export class MapaNativoComponent implements OnInit {

  @ViewChild('divMap') divMap!: ElementRef;

  mapa!: google.maps.Map;

  constructor() {
    //this.divMap = new ElementRef('');
    //this.mapa = new google.maps.Map(this.divMap.nativeElement)
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.cargarMapa(position)
      })
    } else {
      console.log('Navegador no compatible')
    }

  }

  cargarMapa(position: any) {
    const opciones = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    this.mapa = new google.maps.Map(this.divMap.nativeElement, opciones)
  }

}
