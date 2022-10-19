import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./FavoritesProduct.scss";
import { setProductsLike } from "../state";
import { ProductType } from "../interface";

interface Props {
  product: ProductType;
}

const FavoritesProduct: React.FC<Props> = ({ product }) => {
  const { src, name, price, like } = product;

  return (
    <div className="favorite-prod">
      <img
        className="favorite-prod__img"
        alt="propduct"
        src={`https://testbackend.nc-one.com${src}`}
      />

      <div className="favorite-prod-details">
        <div className="favorite-prod-details__name"> {name}</div>
        <div className="productpage-description">
          <span className="favorite-prod-details__price">$ {price}</span>
          <span
            className="favorite"
            onClick={() => {
              setProductsLike(product);
            }}
          >
            <FavoriteIcon
              sx={{ fontSize: 16, color: () => (like ? "#414141" : "#fbfbfb") }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavoritesProduct;
