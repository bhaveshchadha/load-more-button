import { useContext, useEffect } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/productContext";

function ProductList() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("ProductList must be used within a ProductContextProvider");
  }
  const { products, getProducts, images } = productContext;
  console.log(images);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((item, index) => {
          return (
            <ProductItem
              key={item.id}
              name={item.title}
              image={images[index]}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
