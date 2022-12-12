import "./styles/App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import Modules from "./components/Modules";

function App() {
  return (
    <div>
      <div className="app">
        <div className="container">
          <Header className="header" />
          <Modules className="modules" />
        </div>
        <Map className="map" />
      </div>
    </div>
  );
}

export default App;
