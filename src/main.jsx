import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Routing from "./Routing";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./redux/productsApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ApiProvider api={productsApi}>
      <Routing>
        <App />
      </Routing>
    </ApiProvider>
  </Provider>
);
