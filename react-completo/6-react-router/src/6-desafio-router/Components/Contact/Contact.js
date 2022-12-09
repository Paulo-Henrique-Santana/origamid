import React from "react";
import imgContact from "../../img/contato.jpg";
import Head from "../Head/Head";
import "./Contact.css";

const Contato = () => {
  return (
    <section className="container-contact animeLeft">
      <Head title="Ranek | Contacts" />
      <img src={imgContact} alt="" />
      <div className="description">
        <h1>Entre em contato.</h1>
        <p className="info">andre@origamid.com</p>
        <p className="info">99999-9999</p>
        <p className="info">Rua Ali Perto, 999</p>
      </div>
    </section>
  );
};

export default Contato;
