/** @format */

import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductCardPage.scss";
import { setProductsLike, useGlobalState } from "../state";
import { ProductType } from "../interface";
import ReactImageMagnify from "react-image-magnify";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

interface Props {
  product: ProductType;
}

const ProductCardPage: React.FC<Props> = ({ product }) => {
  const { src, name, price, id, like } = product;
  const [favoriteProducts] = useGlobalState("favoriteProducts");
  const imageUrl = `https://testbackend.nc-one.com${src}`;

  return (
    <div className="productpage">
      <div>
        <ReactImageMagnify
          className="productpage-img"
          {...{
            smallImage: {
              isFluidWidth: false,
              src: imageUrl,
              height: 400,
              width: 400,
            },
            largeImage: {
              src: imageUrl,
              width: 1200,
              height: 1800,
            },
          }}
        />
        <ZoomInIcon />
      </div>
      <div className="productpage-a">
        <div className="productpage-name"> {name}</div>
        <div className="productpage-description">
          <div className="productpage-description__price">$ {price}</div>
          <div
            className="productpage-favorite"
            onClick={() => {
              setProductsLike(product);
            }}
          >
            <FavoriteIcon
              sx={{ fontSize: 64, color: () => (like ? "#414141" : "#fbfbfb") }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPage;
