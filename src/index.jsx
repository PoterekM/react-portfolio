import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { HashRouter } from 'react-router-dom';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <App />
      </div>

    </HashRouter>
  </Provider>,
  document.getElementById("react-app-root")
);
