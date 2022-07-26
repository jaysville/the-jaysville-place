import { useState } from "react";
import Cart from "../../Cart/Cart";
import Navbar from "./Navbar";

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const showCart = () => {
    setCartIsOpen(true);
  };
  const hideCart = () => {
    setCartIsOpen(false);
  };
  return (
    <>
      <header>
        <Navbar onShowCart={showCart} />
      </header>
      {cartIsOpen && <Cart onHideCart={hideCart} />}
    </>
  );
};
export default Header;
