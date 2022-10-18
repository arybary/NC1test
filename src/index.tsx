import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyledEngineProvider>,
  root
);
