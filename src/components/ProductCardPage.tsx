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
  const { src, name, price, like } = product;
  const [favoriteProducts] = useGlobalState("favoriteProducts");
  const imageUrl = `https://testbackend.nc-one.com${src}`;

  return (
    <div className="productpage">
      <div className="productpage-img">
        <ReactImageMagnify
         
          {...{
            smallImage: {
              isFluidWidth: true,
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
        <ZoomInIcon sx={{ fontSize: 48}}/>
      </div>
      <div className="productpage-details">
        <div> {name}</div>
        <div className="productpage-description">
          <div className="productpage-description__price">$ {price}</div>
          <div          
            onClick={() => {
              setProductsLike(product);
            }}
          >
            <FavoriteIcon className="productpage-favorite"
              sx={{ fontSize: 64, color: () => (like ? "#414141" : "#fbfbfb") }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPage;
