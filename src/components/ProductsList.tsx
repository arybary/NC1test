import React, { CSSProperties } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "./ProductsList.scss";
import Favorites from "./FavoritesProducts";
import { useGlobalState } from "../state";
import { ProductType } from "../interface";
import ProductCardList from "./ProductCardList";

interface CellType {
  columnIndex: number;
  rowIndex: number;
  data: Array<ProductType>;
  style: CSSProperties;
}

const Cell = ({ columnIndex, rowIndex, style, data }: CellType) => {
  const product = data[columnIndex + rowIndex * 4];
  return (
    <div style={style}>{product && <ProductCardList product={product} />}</div>
  );
};

const ProductsList: React.FC = () => {
  const [products] = useGlobalState("products");

  return (
    <>
      <header className="header">Product list Page</header>
      <main className="maine">
        <Favorites />
        <AutoSizer>
          {({ height, width }) => {
            const listWidth = 0.72 * width;
            const listWidthItem = listWidth / 4 > 200 ? listWidth / 4 - 5 : 200;
            const rowCountList=Math.ceil(products.length / 4 )

            return (
              <Grid
                columnCount={4}
                columnWidth={listWidthItem}
                height={height}
                rowCount={rowCountList}
                itemData={products}
                rowHeight={420}
                width={listWidth}
              >
                {Cell}
              </Grid>
            );
          }}
        </AutoSizer>
      </main>
    </>
  );
};

export default ProductsList;
