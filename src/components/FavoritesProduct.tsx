import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductCardPage.scss";
import { setProductsLike, useGlobalState } from "../state";
import { ProductType } from "../interface";

interface Props {
  product: ProductType;
}

const FavoritesProduct: React.FC<Props> = ({ product }) => {
  const { src, name, price, id, like } = product;
  const [favoriteProducts] = useGlobalState("favoriteProducts");

  return (
    <div className="productpage">
      <div className="productpage-img">
      <img
        className="productpage-img"
        alt="propduct"
        src={`https://testbackend.nc-one.com${src}`}
      />
      </div>
      <div className="productpage-a">
        <div  className="name"> {name}</div>
        <div className="productpage-description">
       
          <div className="price">$ {price}</div>
          <div
            className="favorite"
            onClick={() => {
              setProductsLike(product);
            }}
          >
            <FavoriteIcon
              sx={{ fontSize: 16, color: () => (like ? "#414141" : "#fbfbfb") }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesProduct;