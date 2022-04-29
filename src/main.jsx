import React from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./routes/AppRouter";
import "./index.css";

const divRoot = document.querySelector("#root");
const root = createRoot(divRoot);

root.render(<AppRouter/>);