import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Calculator from "./components/calculator/Calculator";
import rootReducer from "./reducers/calculator";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  operation: null,
  number1: null,
  number2: null,
  result: null,
  error: null
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.store = store;
