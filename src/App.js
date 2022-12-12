import "./styles/App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import Modules from "./components/Modules";
import MapTest from "./components/MapTest";

function App() {
  return (
    <div>
      <div className="app">
        <div className="container">
          <Header className="header" />
          <Modules className="modules" />
        </div>
        <MapTest className="map" />
      </div>
    </div>
  );
}

export default App;
