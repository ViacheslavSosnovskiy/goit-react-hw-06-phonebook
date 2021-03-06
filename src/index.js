import React from "react";
import ReactDOM from "react-dom";
// import { myActions } from "./redux/actions";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from "./redux/store";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// console.log(store.dispatch(myActions));