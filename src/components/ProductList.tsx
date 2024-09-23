import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
interface Product {
  id: number; // Assuming id is a number; change if it's a string
  title: string;
  images: []; // Adjust based on your actual image structure
}
function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=5");
      const data = await response.json();
      // console.log(data);
      setProducts(data.products);
      setLoading(false);
    };
    getProducts();
  }, []);
  if (loading) {
    return <div>Loading</div>;
  } else
    return (
      <div className="grid grid-cols-4 gap-4">
        {products.map((item) => {
          // console.log(item);
          return (
            <ProductItem key={item.id} name={item.title} image={item.images} />
          );
        })}
      </div>
    );
}

export default ProductList;
