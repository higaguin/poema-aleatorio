import React from "react";
import { connect } from "react-redux";
import { changePoetImage } from "./StyleHelper";

class Poet extends React.Component {
  render() {
    const side = this.props.side;
    const poet = this.props.poet;

    changePoetImage(poet.image);

    return (
      <div className={`poet ${side === "b" ? "poet-b" : ""}`}>
        <div className={`poet__img ${side === "b" ? "poet__img-b" : ""}`}></div>
        <div className="poet__name">{poet.author}</div>
        <div className="poet__country">{poet.origin}</div>
        <p className="poet__bio">{poet.bio}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.data;
};

export default connect(mapStateToProps)(Poet);
