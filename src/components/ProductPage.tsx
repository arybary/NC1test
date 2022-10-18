import React from "react";
import { useGlobalState } from "../state";
import { useParams } from "react-router-dom";
import Favorites from "./FavoritesProducts";
import { Link } from "react-router-dom";
import "./ProductPage.scss";
import Product from "./ProductCardPage";

const ProductPage: React.FC = () => {
  let { productId } = useParams<{ productId?: string }>();
  const [products] = useGlobalState("products");

  let [productPageData] = products.filter(
    (product: any) => product.id === Number(productId)
  );

  
  return (
    <>
      <header className="header">Product Page</header>
      <main className="maine">
        <Favorites />
       <Product product={productPageData} />
      
      </main>
      <Link className="link-productlist" to="/">PRODUCT LIST PAGE</Link>
    </>
  );
};

export default ProductPage;


