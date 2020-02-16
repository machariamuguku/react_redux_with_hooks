// reducers -> describes (and transforms)
// current/default state to the next state

// utility to combine reducers
import { combineReducers } from "redux";

// add people reducer
function People(state = { loading: false, people: {} }, action) {
  switch (action.type) {
    case "setPeople":
      return {
        loading: action.loading,
        people: action.payload
      };
    case "unSetPeople":
      return { loading: false, people: {} };
    default:
      return state;
  }
}

// export the combined reducers
export default combineReducers({
  People: People
});
