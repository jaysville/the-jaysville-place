import "./CartAdded.css";

const CartAdded = () => {
  return (
    <div>
      <div className="modal-title">
        <h3>Item(s) Added to Cart</h3>
      </div>
      <div className="mt-3">
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartAdded;
