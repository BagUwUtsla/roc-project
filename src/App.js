import "./styles/App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import Modules from "./components/Modules";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Modules className="modules" />
        <Map className="map" />
      </div>
    </div>
  );
}

export default App;
