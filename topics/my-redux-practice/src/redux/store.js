import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import myLogger from "./middlewares/myLogger";
import reduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";

import { todoReducer } from "../pages/todo/state/reducer";
import { serverLogReducer } from "../pages/common/state/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  serverLog: serverLogReducer,
});

const rootMiddleWares = [
  //myLogger,
  reduxLogger,
  ReduxThunk,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...rootMiddleWares))
);

export default store;
