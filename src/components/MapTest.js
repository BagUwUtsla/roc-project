import map from "../data/Skyrimmap.png";
import React from "react";

class MapTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    console.log(this.x, this.y);
  }

  render() {
    return (
      <div>
        <img
          onMouseMove={this._onMouseMove.bind(this)}
          className="map"
          src={map}
          alt="map"
        ></img>
      </div>
    );
  }
}

export default MapTest;
