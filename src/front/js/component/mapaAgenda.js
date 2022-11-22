import React from "react";
import { GMapify, AddressFormatter } from "g-mapify";
import { useRef, useState } from "react";
import "../../styles/map.css";
import "../../img/dog-location.png";

export const MapaAgenda = () => {
  const mapOptions = {
    zoom: 15,
    zoomControl: true,
    fullscreenControl: false,
    mapTypeControl: false,
    scrollwheel: true,
    disableDefaultUI: false,
    libraries: ["places"],
  };

  const onMapSelect = (status, data) => {
    console.log("status", status); //Información
    console.warn("Map Data", data);
    // guardamos el formattedAddress value que es el que incluye el addres como se necesita en el back.
    const formattedAddress = AddressFormatter(data.address_components);
    console.warn("formated address", formattedAddress);
  };

  return (
    <>
      <div className="">
        <GMapify
          mapOptions={mapOptions}
          appKey="AIzaSyBa7EylxqVyLQ6mZyNaLbmtZlePTrHWPj4"
          hasSearch
          onSelect={onMapSelect}
          hasMarker={true}
          markerIcon="dog-location.png"
          searchPlaceHolder={"Ingrese su ubicación"}
          searchClassName={"inputSearchBar"}
        />
      </div>
    </>
  );
};
