import React from "react";
import Exemplo from "./Exemplo";

function reducer(state, action) {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "diminuir":
      return state - 1;
    default:
      throw new Error();
  }

  // if (action === "aumentar") {
  //   return state + 1;
  // }
  // if (action === "diminuir") {
  //   return state - 1;
  // }
  // return new Error("Error action não existe");
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("diminuir")}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};

export default App;
