import React from "react";
import { useParams } from "react-router-dom";
import Head from "../Head/Head";
import "./Product.css";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );
      const json = await response.json();
      setProduct(json);
    };
    fetchProduct();
  }, []);

  return (
    <section className="container-product">
      {product ? (
        <div className="animeLeft">
          <Head title={`Ranek | ${product.nome}`} />
          <div className="images">
            {product.fotos.map((foto) => (
              <img key={foto.titulo} src={foto.src} />
            ))}
          </div>
          <div className="details">
            <h1 className="name">{product.nome}</h1>
            <span className="price">R$ {product.preco}</span>
            <p className="description">{product.descricao}</p>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </section>
  );
};

export default Product;
