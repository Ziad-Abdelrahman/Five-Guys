

interface MapProps {
    height: string;
    width: string;
  }


const Map: React.FC<MapProps> = ({height, width}) => {

    let map;
    async function initMap(): Promise<void> {

    const position = { lat: 30.004760567553376, lng: 31.18680245390258 };

  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  map = new Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: position,
      mapId: 'Baheya',
    }
  );

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Cairo'
  });
}

initMap();

  return (
      <div id="map" style={{ height: height, width: width }}></div>
  );
};

export default Map;
