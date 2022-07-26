import { useContext } from "react";
import Modal from "../Modal/Modal";
import CartContext from "../../Store/cart-context";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const totalAmount = Math.abs(cartCtx.totalAmount.toFixed(2));

  const hasItems = cartCtx.items.length > 0;

  const order = () => {
    alert("DETAILS SENT TO YOUR EMAIL");
    props.onHideCart();

    navigate("/");
  };

  return (
    <Modal className="cart-modal">
      <div className="cart-container ">
        {hasItems ? (
          cartCtx.items.map((item) => {
            return (
              <div key={item.id} className="row p-5 cart-item">
                <div className="col-md-6 cart-img-container mb-3 d-flex justify-content-center align-items-center">
                  <img src={item.image} alt="" className="img-fluid cart-img" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center cart-details">
                  <h4>{item.title}</h4>
                  <p className="mt-3">x{item.amount}</p>
                  <p>${item.price}</p>
                  <div>
                    <button
                      className="cart-item-btn"
                      onClick={() => {
                        cartCtx.removeItem(item.id);
                      }}
                    >
                      -
                    </button>
                    <button
                      className="cart-item-btn"
                      onClick={() => {
                        cartCtx.addItem({ ...item, amount: 1 });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-cart-item">
            <p>No Items Added Yet...</p>
            <p>Go to shop!</p>
          </div>
        )}
      </div>

      <div className="cart-actions">
        <h4 className="my-3 ms-auto">Total Amount: ${totalAmount}</h4>
        <div className="d-flex justify-content-center">
          <button onClick={props.onHideCart} className="cancel-btn">
            Cancel
          </button>
          {hasItems && (
            <button onClick={order} className="order-btn">
              Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
