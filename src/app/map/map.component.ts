import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  capitals: string = '/assets/data/usa-capitals.geojson';
  private map!: L.Map;
  private centroid: L.LatLngExpression = [30.1012, 31.2465]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 11
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // create 3 markers and add them to map
     Array(3).fill(this.centroid).map( 
        x => [x[0] + (Math.random() - .6)/10, x[1] + (Math.random() - .6)/10 ]
      ).map(
        x => L.marker(x as L.LatLngExpression)
      ).forEach(
        x => x.addTo(this.map)
      );

    tiles.addTo(this.map);
  
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  }















