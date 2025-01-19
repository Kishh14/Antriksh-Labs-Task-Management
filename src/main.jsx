import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { ThemeProvider } from "./components/theme-provider";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
