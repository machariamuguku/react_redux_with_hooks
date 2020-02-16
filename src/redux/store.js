import { createStore } from "redux";

// all unified reducers
import allReducers from "./reducers";

// export the composed store
// by combining all reducers and middleware
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
