/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;
  private mapDiv: HTMLDivElement;
  private mapOptions = {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  };

  constructor(divId: string) {
    this.mapDiv = document.getElementById(divId) as HTMLDivElement;
    this.googleMap = new google.maps.Map(this.mapDiv, this.mapOptions);
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
