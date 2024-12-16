import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { ProductService } from '../services/product.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private esindused: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.esindused = this.productService.esindused;
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.makeEsindusedMarkers();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 58.6288, 25.5454 ],
      zoom: 7
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private makeEsindusedMarkers(): void {
      for (const esindus of this.esindused) {
        const lat = esindus.xCoord;
        const lon = esindus.yCoord;
        const marker = L.marker([lat, lon]);
        
        marker.bindPopup(this.makePopup(esindus));
        marker.addTo(this.map);
      }
  }

  private makePopup(data: any): string {
    return `` +
      `<div>Keskus: ${ data.nimi }</div>` +
      `<div>Telefon: ${ data.telefon }</div>` +
      `<a href=${data.href} target="_blank">Aadress: ${ data.aadress }</a>`
  }

  changeMapFocus(centerZoom: {center: L.LatLngExpression, zoom: number}) {
    this.map.setView(centerZoom.center, centerZoom.zoom);
  }
}
