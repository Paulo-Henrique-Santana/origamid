import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "../Head/Head";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      const json = await response.json();
      setProducts(json);
    };
    fetchApi();
  }, []);

  const handleClick = ({ target }) => {
    navigate(`/product/${target.id}`);
  };

  return (
    <section className="container-products animeLeft">
      <Head title="Ranek" />
      {products &&
        products.map(({ id, fotos, nome }) => (
          <div className="product" key={id}>
            <img id={id} onClick={handleClick} src={fotos[0].src} />
            <p className="name">{nome}</p>
          </div>
        ))}
    </section>
  );
};

export default Home;
