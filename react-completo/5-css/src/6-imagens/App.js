import React from "react";
import "./App.css";
import foto from "./img/foto.jpg";
import DogSvg from "./DogSvg";

const App = () => {
  const [olho, setOlho] = React.useState(0);

  function handleClick() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 30 * i);
    }
  }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <DogSvg color="#84e" olho={olho} />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;
