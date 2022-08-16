import CartContext from "../../../Store/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemsNumber = cartCtx.items.reduce((currentNo, item) => {
    return currentNo + item.amount;
  }, 0);
  return (
    <nav className="d-flex justify-content-between">
      <Link to="/" id="heading">
        <h4 className="mx-1">Jay Stores</h4>
      </Link>

      <div className="mx-1 d-flex justify-content-between cart-icon">
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
