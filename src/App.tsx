import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductsList";
import { ProductType } from "./interface";
import { useGlobalState } from "./state";

const App: React.FC = () => {
  const [products, setProducts] = useGlobalState("products");

  useEffect(() => {
    axios
      .get("https://testbackend.nc-one.com/image")
      .then((res: any) =>
        setProducts(
          res.data.map((prod: ProductType) => ({ ...prod, like: false }))
        )
      );
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
