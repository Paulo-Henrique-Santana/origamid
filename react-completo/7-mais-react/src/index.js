import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./1-proptypes/App";
// import App from "./2-lazy-e-suspense/App";
// import App from "./3-memo/App";
// import App from "./4-useReducer/App";
import App from "./5-classes/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
