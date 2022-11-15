import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

const containerStyle = {
  width: "800px",
  height: "800px",
};

const center = {
  lat: -42.9136,
  lng: -71.3108,
};

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBa7EylxqVyLQ6mZyNaLbmtZlePTrHWPj4",
    libraries: ["places"],
  });

  const [map, setMap] = React.useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const originRef = useRef();

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const setPlace = async () => {
    console.log(originRef);
    setDirectionsResponse(originRef);
  };

  return isLoaded ? (
    <div className="container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        defaultZoom={6}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      <div className="input-group mb-3">
        <Autocomplete>
          <input
            className="form-control rounded shadow my-2"
            type="text"
            placeholder="Origin"
            ref={originRef}
          />
        </Autocomplete>
        <button
          className="btn btn-outline-warning rounded"
          type="submit"
          onClick={setPlace}
        >
          Go
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};
