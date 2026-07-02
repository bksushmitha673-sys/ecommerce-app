import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Your cart is empty.</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item._id, Number(e.target.value))
              }
              style={{
                width: "60px",
                marginLeft: "10px",
              }}
            />
          </label>

          <p>
            Subtotal: ₹{item.price * item.quantity}
          </p>

          <button
            onClick={() => removeFromCart(item._id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 15px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{cartTotal}</h2>

      <Link to="/checkout">
        <button
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;