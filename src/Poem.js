import React from "react";
import { connect } from "react-redux";
import { changePoem } from "./actions";
import { changeRandomColor, changeRandomImage } from "./StyleHelper";

class Poem extends React.Component {
  render() {
    const side = this.props.side;
    const poem = this.props.poem;

    return (
      <main className="poem-view">
        <div
          className={`poem-card poem-card-a ${
            side === "b" ? "poem-card-b" : ""
          }`}
        >
          <div className="poem-card__header">{poem.title}</div>
          <div className="poem-card__text">
            <>
              {poem.text.split(/\n/g).map(item => {
                return <p>{item}</p>;
              })}
            </>
          </div>
          <div className="poem-card__extra">
            <button
              className="next-button"
              onClick={e => {
                this.props.changePoem().then(() => {
                  document.body.className = side !== "b" ? "body-b" : "";
                  let mote = side !== "b" ? "primary" : "secondary";
                  setTimeout(() => {
                    changeRandomImage(mote);
                    changeRandomColor(mote);
                  }, 300);
                });
              }}
            >
              Otro Poema &rarr;
            </button>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state.data;
};

export default connect(
  mapStateToProps,
  { changePoem }
)(Poem);
