import axios from "axios";
export const GET_ALL_POSTS = "GET_ALL_POSTS";

export function getAllPosts() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`);
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