import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductCardList.scss";
import { setProductsLike, useGlobalState } from "../state";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductType } from "../interface";

interface Props {
  product: ProductType;
}

const ProductCardList: React.FC<Props> = ({ product }) => {
  const [favoriteProducts] = useGlobalState("favoriteProducts");

  const { src, name, price, id, like } = product;

  const favorite = like ? "favorite" : "favorite favorite__no";

  const onFavorite = () => {
    setProductsLike(product);
  };

  return (
    <Card className="product">
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            className="product-img"
            component="img"
            image={`https://testbackend.nc-one.com${src}`}
            alt="product"
          />
          <CardContent className="product-title" >
        {name}
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className="product-description">
        <Typography gutterBottom variant="h6" component="div">
          $ {price}
        </Typography>
        <div className={favorite} onClick={onFavorite}>
          <FavoriteIcon />
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCardList;
