import modules from "../data/modules_places.json";
import "../styles/Modules.css";

function Modules() {
  return (
    <div className="wrapper">
      {modules.map((element, index) => (
        <div className="module">
          Module {element.name}
          <div>
            <div>x : {element.x}</div>
            <div>y : {element.y}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Modules;
