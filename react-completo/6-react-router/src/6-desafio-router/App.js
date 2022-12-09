import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Contato from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";

const Main = styled.main`
  margin: 0 auto;
  max-width: 850px;
`;

const App = () => {
  return (
    <Main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Main>
  );
};

export default App;
