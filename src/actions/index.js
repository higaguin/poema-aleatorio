import axios from "../api";

export const changePoem = () => async dispatch => {
  const response = await axios.get("/api/randomPoem");

  dispatch({ type: "CHANGE_POEM", payload: response.data });
};

export const initialPoem = () => async dispatch => {
  const response = await axios.get("/api/randomPoem");

  dispatch({ type: "INITIAL_POEM", payload: response.data });
};
