import { combineReducers } from "redux";

const INITIAL_STATE = {
  side: "a"
};

const getPoetInfo = poet => {
  return {
    author: poet.author,
    origin: poet.origin,
    bio: poet.bio,
    image: poet.image
  };
};

const getPoemInfo = poem => {
  return { title: poem.title, text: poem.text };
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_POEM":
      return {
        ...state,
        poem: getPoemInfo(action.payload),
        poet: getPoetInfo(action.payload.poet),
        side: state.side === "a" ? "b" : "a"
      };
    case "INITIAL_POEM":
      return {
        ...state,
        poem: getPoemInfo(action.payload),
        poet: getPoetInfo(action.payload.poet)
      };
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer
});
