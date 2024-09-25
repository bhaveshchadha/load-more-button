import React, { ReactNode, useEffect, useState } from "react";

interface Product {
  id: number; // Assuming id is a number; change if it's a string
  title: string;
  images: string[]; // Adjust based on your actual image structure
}
interface ProductContextType {
  products: Product[];
  maxLimitCrossed: boolean;
  loading: boolean;
  getProducts: () => Promise<void>;
  changeLimit: () => void;
  images: string[];
}
export const ProductContext = React.createContext<
  ProductContextType | undefined
>(undefined);

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState<number>(20);
  const [maxLimitCrossed, setMaxLimitCrossed] = useState<boolean>(false);

  const changeLimit = () => {
    if (limit >= 40) setMaxLimitCrossed(true);
    else setLimit(limit + 10);
  };

  const getProducts = async () => {
    try {
      // console.log("first");
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}`
      );
      const data = await response.json();
      setProducts(data.products);
      const p = data.products.map((item: Product) => item.images[0]);
      setImages(p);
      // getImages();
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false); // Ensure loading is false after fetching
    }
  };
  useEffect(() => {
    getProducts();
  }, [limit]);
  return (
    <ProductContext.Provider
      value={{
        products,
        maxLimitCrossed,
        getProducts,
        loading,
        changeLimit,
        images,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
