import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./stores/reducers/rootReducer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const ReduxStore = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
