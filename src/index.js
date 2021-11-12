import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
// import { myActions } from "./redux/actions";
import { Provider } from "react-redux";

// console.log(store.dispatch(myActions));

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
