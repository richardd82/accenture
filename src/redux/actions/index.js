import axios from "axios";
const { REACT_APP_URL_BACK } = process.env;
export const GET_ALL_POSTS = "GET_ALL_POSTS";

export function getAllposts() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${REACT_APP_URL_BACK}/posts`);
      console.log("POOOOOOSTTTSSS", json)
      return dispatch({
        type: GET_ALL_POSTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}