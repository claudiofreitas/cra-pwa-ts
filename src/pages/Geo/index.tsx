import { useGeolocation } from 'react-use';

const Geo = () => {
  const state = useGeolocation();

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <br />
      loading: {state.loading}<br />
      latitude: {state.latitude}<br />
      longitude: {state.longitude}<br />
    </div>
  );
};

export default Geo;

// {
//   "loading": false,
//   "accuracy": 13.017,
//   "altitude": null,
//   "altitudeAccuracy": null,
//   "heading": null,
//   "latitude": 35.6979809,
//   "longitude": 139.8234991,
//   "speed": null,
//   "timestamp": 1634793433540
// }
