import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // private map!: L.Map;
  // private centroid: L.LatLngExpression = [26, 30]; //

  // private initMap(): void {
  //   this.map = L.map('map', {
  //     center: this.centroid,
  //     zoom: 6
  //   });

  //   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 18,
  //     minZoom: 1,
  //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //   });
  //   const markers = Array(3).fill(this.centroid).map(
  //     x => [x[0] + (Math.random() - 26) / 30, x[1] + (Math.random() - 26) / 30]
  //   ).map(
  //     x => L.marker(x as L.LatLngExpression)
  //   ).forEach(
  //     x => x.addTo(this.map)
  //   );
  //   tiles.addTo(this.map);
  // }

  // constructor() { }

  // ngOnInit(): void {
  //   this.initMap();
  // }
  private map!: L.Map;
  private centroid: L.LatLngExpression = [31, 30.89]; //

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

    // create 10 markers and add them to map
     Array(10).fill(this.centroid).map( 
        x => [x[0] + (Math.random() - .1)/8, x[1] + (Math.random() - .4)/7 ]
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
