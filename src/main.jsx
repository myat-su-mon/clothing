import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Routing from "./Routing";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Routing>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Routing>
  </Provider>
);
