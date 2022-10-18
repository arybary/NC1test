import React, { CSSProperties } from "react";
import { useGlobalState } from "../state";
import "./FavoritesProducts.scss";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { ProductType } from "../interface";
import FavoritesProduct from "./FavoritesProduct";

interface RowType {
  index: number;
  data: Array<ProductType>;
  style: CSSProperties;
}

const Row = ({ index, style, data }: RowType) => {
  console.log(data[index])
  return (
    <div style={style}>
    {<FavoritesProduct product={data[index]} />}
    </div>
  );
};

const Favorites: React.FC = () => {
  const [favoriteProducts] = useGlobalState("favoriteProducts");
  console.log(favoriteProducts);
  return (
    <div className="favorites">
      <div className="favorites-title">favorites</div>
      {favoriteProducts.length !== 0 && (
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={0.9*height}
              itemCount={favoriteProducts.length}
              itemSize={108}
              width={0.8*width}
              itemData={favoriteProducts}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      )}
    </div>
  );
};

export default Favorites;
