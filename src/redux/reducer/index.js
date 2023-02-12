import {
    GET_ALL_POSTS,
    // GET_IMAGES,
  } from "../actions";
  
  const initialState = {
    post: [],
    postBack: [],
    images: [],
    
  };
  const rootReducer = (state = initialState, action) => {
    // console.log(action.type, "REDUCEEEER")
    switch (action.type) {
      case GET_ALL_POSTS:
        return {
          ...state,
          posts: [...action.payload],
          usersBak: [...action.payload],
        };     
      // case GET_IMAGES:
      //   return {
      //     ...state,
      //     posts: [...action.payload],
      //     usersBak: [...action.payload],
      //   };     
  
      default:
        return state;
    }
  };
  export default rootReducer;