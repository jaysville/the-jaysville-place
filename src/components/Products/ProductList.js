import { useState } from "react";

import Modal from "../Modal/Modal";
import CartAdded from "./CartAdded";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 800);
  };

  return (
    <>
      {added && (
        <Modal>
          <CartAdded />
        </Modal>
      )}

      <section className="d-flex justify-content-center flex-wrap">
        {props.products.map(({ id, title, price, image }) => {
          return (
            <div key={id}>
              <ProductItem
                id={id}
                title={title}
                price={price}
                image={image}
                onAddToCart={addToCart}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductList;
