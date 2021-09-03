import { FC } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface MapWrapperProps {
  onClickMarker: any;
}

const MapWrapper: FC<MapWrapperProps> = ({ onClickMarker }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU',
  });

  const shibuya = {
    lat: 35.658562354733306,
    lng: 139.70317306056933,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: '600px',
        height: '600px',
      }}
      zoom={11}
      center={shibuya}
    >
      <Marker
        key=""
        position={shibuya}
        title={`Marker`}
        onClick={() => {
          onClickMarker('3');
          console.log('how dare you click me');
        }}
      />
    </GoogleMap>
  ) : null;
};

const Map = () => {
  return (
    <MapWrapper
      onClickMarker={(id: string) => {
        console.log('clicked marker id: ', id);
      }}
    />
  );
};

export default Map;
