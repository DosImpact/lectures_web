import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import myLogger from "./middlewares/myLogger";
import reduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";

import { todoReducer } from "../pages/todo/state/reducer";
import { queryReducer } from "../pages/common/state/queryReducer";
import { serverLogReducer } from "../pages/common/state/serverLogReducer";
import { cacheReducer } from "../pages/common/state/cacheReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  serverLog: serverLogReducer,
  query: queryReducer,
  cache: cacheReducer,
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
