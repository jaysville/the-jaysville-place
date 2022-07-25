import { useContext, useState } from "react";
import CartContext from "../../Store/cart-context";

const ProductItem = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);
  const cartCtx = useContext(CartContext);

  const amountHandler = (e) => {
    setEnteredAmount(+e.target.value);
  };
  const addToCartHandler = () => {
    props.onAddToCart();
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: enteredAmount,
      price: props.price,
      image: props.image,
    });
  };
  return (
    <div className="productItem text-center">
      <img
        src={props.image}
        alt=""
        className="img-fluid img-thumbnail my-image mb-3"
      />

      <p className="product-title">{props.title}</p>

      <h4>${props.price}</h4>
      <form className="my-2">
        <input
          min="1"
          max="5"
          step="1"
          className="cart-input"
          defaultValue={1}
          type="number"
          onChange={amountHandler}
        />
      </form>

      <div className="d-flex flex-column">
        <button
          className="btn add-to-cart-btn d-block"
          onClick={addToCartHandler}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
