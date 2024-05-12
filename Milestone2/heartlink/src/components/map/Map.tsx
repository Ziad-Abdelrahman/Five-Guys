import { useState } from "react";

interface MapProps {
  height: string;
  width: string;
}

const Map: React.FC<MapProps> = ({ height, width }) => {
  const [pinned, setPinned] = useState(false);
  async function initMap(): Promise<void> {
    let map;
    const position = { lat: 30.004760567553376, lng: 31.18680245390258 };

    //@ts-ignore
    const { Map } = (await google.maps.importLibrary(
      "maps",
    )) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker",
    )) as google.maps.MarkerLibrary;

    // The map, centered at Uluru
    map = new Map(document.getElementById("map") as HTMLElement, {
      zoom: 4,
      center: position,
      mapId: "Baheya",
    });
    const markers: google.maps.marker.AdvancedMarkerElement[] = [];
    // Add a click event listener to the map
    map.addListener("click", (event: { latLng: any }) => {
      markers.forEach((marker) => {
        marker.map = null;
      });
      // Create a new marker at the clicked location
      var marker = new AdvancedMarkerElement({
        map: map,
        position: event.latLng,
        title: "New Marker",
      });
      markers.push(marker);
      if (markers.length >= 1) {
        (
          document.getElementById("mapinput") as HTMLInputElement
        ).setCustomValidity("");
        setPinned(true);
      }
    });
  }

  initMap();

  return (
    <div style={{ position: "relative", width: width, height: height }}>
      <input
        id="mapinput"
        required
        onInvalid={(e) => {
          e.currentTarget.setCustomValidity(
            "Please pin your location on the map",
          );
        }}
        value={pinned ? "Pinned" : ""}
        style={{
          opacity: 0,
          position: "absolute",
          zIndex: -1,
          width: "0px",
          height: "0px",
          bottom: "0",
          left: "0",
        }}
      />
      <div id="map" style={{ height: height, width: width }}></div>
    </div>
  );
};

export default Map;
