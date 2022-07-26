import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/Products/ProductList";
import Main from "../components/layout/Main/Main";
import Loader from "../components/layout/Loader/Loader";
const Product = () => {
  const { query } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  const getProducts = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${query}`
    );
    const products = response.data;
    setLoadedProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Main>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="px-4">
            <h1 className="text-center my-5">
              SHOP {`${query.toUpperCase()}`}
            </h1>
            <ProductList products={loadedProducts} />
          </div>
        )}
      </Main>
    </>
  );
};
export default Product;
