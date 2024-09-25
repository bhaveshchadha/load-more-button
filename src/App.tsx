import ProductResults from "./components/ProductResults";
import ProductContextProvider from "./context/productContext";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <ProductResults />
      </ProductContextProvider>
    </>
  );
}

export default App;
