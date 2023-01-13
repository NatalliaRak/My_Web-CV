import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import './map.css'

function Map() {
  const mapElement = useRef();
  const mapLongitude= 23.1688403;
  const mapLatitude = 53.1324886;
  const mapZoom = 13;
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState({});
  

  useEffect(() => {

    let map = tt.map({
      key: 'sLgejLZAzEPPo0SX4HgZOXRvQSCECjDf',
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom 
     
    });

    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());


    setMap(map);
    return () => map.remove();

  }, []);
  

  return (
    <div className="Maping">
            <div ref={mapElement} className="mapDiv" />
    </div>
  );
}

export default Map