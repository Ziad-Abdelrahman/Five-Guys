import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, } from '@react-google-maps/api';

declare global {
  interface Window {
    initMap: () => void;
  }
}

const OrganizationMap: React.FC<any> = () => {
  const mapRef = useRef<HTMLDivElement>(null); // to store the reference of th map container
  const [map, setMap] = React.useState<google.maps.Map | null>(null); // to hold the instance of the Google Map

  const organizationPosition = { lat: 500, lng: 500 }; // defines the intial pos for the org on the map

  useEffect(() => {
    if (mapRef.current) {
      setMap(
        new window.google.maps.Map(mapRef.current, {
          zoom: 15,
          center: organizationPosition,
        })
      );
    }
  }, []); // intializes the google map instance and sets it to the state variable 'map'

  return (
    <LoadScript // loads google maps JS API with the provided API
      googleMapsApiKey="YOUR_API_KEY"
      libraries={['places']}
    >
      <GoogleMap // renders actual map
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={organizationPosition}
        zoom={15}
        onLoad={map => setMap(map)}
      >
        {map && (
          <Marker position={organizationPosition} title="Organization Location" />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default OrganizationMap;
    
    