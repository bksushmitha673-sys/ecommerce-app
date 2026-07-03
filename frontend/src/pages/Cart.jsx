import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="page-container" style={{ textAlign: "center" }}>
        <h2>Your cart is empty.</h2>
        <Link to="/" style={{ color: "#2563eb", fontWeight: "bold" }}>
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 style={{ marginBottom: "25px", color: "#1f2937" }}>🛒 Shopping Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="cart-card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <div>
            <h3 style={{ marginBottom: "6px" }}>{item.name}</h3>
            <p style={{ color: "#666" }}>Price: ₹{item.price}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Qty:
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
                style={{ width: "60px" }}
              />
            </label>
            <p style={{ fontWeight: "bold", minWidth: "100px" }}>
              ₹{item.price * item.quantity}
            </p>
            <button
              onClick={() => removeFromCart(item._id)}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
        <h2>Total: ₹{cartTotal}</h2>
        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;