import React from "react";
import Poet from "./Poet";
import Poem from "./Poem";
import images from "./Images";
import { connect } from "react-redux";
import { initialPoem } from "./actions";
import "../sass/main.scss";
import pa_128 from "../public/pa-128.png";
require("../public/pa-128-back.png");

class App extends React.Component {
  componentDidMount() {
    this.props.initialPoem().then(() => {
      let newImage = images[Math.floor(Math.random() * images.length + 1)];
      console.log(newImage);
      document.documentElement.style.setProperty(
        `--image-background-primary`,
        `url(https://picsum.photos/id/${newImage}/840/500)`
      );
      document.documentElement.style.setProperty(
        `--image-background-secondary`,
        `url(https://picsum.photos/id/${newImage}/840/500)`
      );
      document.documentElement.style.setProperty(
        `--image-poet-primary`,
        `url(${this.props.poet.image})`
      );
    });
  }

  render() {
    const side = this.props.side;
    const { poet } = this.props;
    const { poem } = this.props;

    return (
      <div
        className={`container container-a ${side === "b" ? "contianer-b" : ""}`}
      >
        <div className={`side-content side-content-${side}`}>
          {poet ? <Poet /> : ""}
        </div>
        <div className={`content content-${side}`}>
          <header className="header">
            <img src={pa_128} alt="logo" className="logo" />
            <div className="logo-text">Poema Aleatorio</div>
          </header>
          {poem ? <Poem /> : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.data;
};

export default connect(
  mapStateToProps,
  { initialPoem }
)(App);
