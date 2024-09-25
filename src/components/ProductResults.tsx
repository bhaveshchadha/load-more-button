import { useContext } from "react";
import LoadMoreButton from "./LoadMoreButton";
import ProductList from "./ProductList";
import { ProductContext } from "../context/productContext";
import LimitCrossedWarning from "./LimitCrossedWarning";
import Spinner from "./Spinner";

function ProductResults() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("ProductList must be used within a ProductContextProvider");
  }
  const { maxLimitCrossed, loading } = productContext;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <ProductList />
      {!maxLimitCrossed ? <LoadMoreButton /> : <LimitCrossedWarning />}
    </div>
  );
}

export default ProductResults;
