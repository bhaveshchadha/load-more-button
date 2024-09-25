import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";

function LoadMoreButton() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("ProductList must be used within a ProductContextProvider");
  }
  const { changeLimit } = productContext;

  return (
    <div className="flex justify-center my-10">
      <div className="btn mx-auto" onClick={changeLimit}>
        Load More Button
      </div>
    </div>
  );
}

export default LoadMoreButton;
