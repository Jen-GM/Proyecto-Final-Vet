import React from "react";
import { GMapify, AddressFormatter } from "g-mapify";
import { useRef, useState } from "react";
import "../../styles/map.css";

const SEARCH_MAP = "search_map";

export const Map2Test = () => {
  const [mapType, setmapType] = useState(SEARCH_MAP);

  const mapOptions = {
    zoom: 15,
    zoomControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    disableDefaultUI: true,
  };

  const onMapSelect = (status, data) => {
    console.log("status", status);
    console.warn("Map Data", data);

    // get formatted address from google map address_components
    const formattedAddress = AddressFormatter(data.address_components);
    console.warn("formated address", formattedAddress);
  };

  return (
    <>
      {mapType === SEARCH_MAP && (
        <GMapify
          mapOptions={mapOptions}
          appKey="AIzaSyBa7EylxqVyLQ6mZyNaLbmtZlePTrHWPj4"
          mapClassName="h-100"
          hasSearch
          onSelect={onMapSelect}
        />
      )}
    </>
  );
};
