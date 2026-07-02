import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={
          product.imageUrl ||
          "https://via.placeholder.com/300x220?text=No+Image"
        }
        alt={product.name}
      />

      <div className="product-info">
        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className="price">₹{product.price}</div>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;