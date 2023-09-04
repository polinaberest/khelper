import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Container } from './models/container.model';
import { ContainerService } from './services/container.service';
import { OverlayPanel } from 'primeng/overlaypanel';

const KharkivCoords: google.maps.LatLngLiteral = {
  lat: 49.988358,
  lng: 36.232845,
};

@Component({
  selector: 'app-container-map',
  templateUrl: './container-map.component.html',
  styleUrls: ['./container-map.component.css'],
})
export class ContainerMapComponent {
  center: google.maps.LatLngLiteral = KharkivCoords;
  userLocationAvailable: boolean = false;
  containers$?: Observable<Container[]>;

  @ViewChild('op') overlayPanel?: OverlayPanel;
  selectedMarker: any; // Выбранная метка


  constructor(private readonly containerService: ContainerService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.userLocationAvailable = true;
    });

    this.containers$ = this.containerService.getAllContainers();
  }

  showInfoWindow(marker: Container, $event: any) {
    this.selectedMarker = marker;
    this.overlayPanel?.toggle($event.domEvent);
  }
}
