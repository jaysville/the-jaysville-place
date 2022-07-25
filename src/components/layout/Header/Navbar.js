import CartContext from "../../../Store/cart-context";
import { useContext } from "react";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemsNumber = cartCtx.items.reduce((currentNo, item) => {
    return currentNo + item.amount;
  }, 0);
  return (
    <nav className="d-flex justify-content-between py-3">
      <a href="/" id="heading">
        <h2 className="mx-3">The Jaysville Place</h2>
      </a>

      <div className="mx-3 d-flex justify-content-between cart-icon">
        <span onClick={props.onShowCart}>
          <i className="fa-solid fa-2x fa-cart-shopping" id="cartIcon" />
        </span>
        <div className="d-flex justify-content-center align-items-center ms-3">
          <h3>{cartItemsNumber}</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
