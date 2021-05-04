import React from "react";
import ReactDOM from "react-dom";
import App from "./routes";
import AxiosConfig from "./config/AxiosConfig";
// STYLES
import "antd/dist/antd.css";
import "./styles/main.css";
// REDUX
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// ROUT
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AxiosConfig>
          <App />
        </AxiosConfig>
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);
