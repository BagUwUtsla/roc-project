import map from "../data/Skyrimmap.png";
import module from "../data/modules_places.json";

import "../styles/Map.css";
function Map() {
  return (
    <div>
      <img className="map" src={map} alt="map"></img>
    </div>
  );
}

export default Map;
