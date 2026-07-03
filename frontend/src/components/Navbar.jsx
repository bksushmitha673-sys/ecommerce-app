import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1a1a2e',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '0.5px',
        }}
      >
        ShopMini
      </Link>
      <Link
        to="/cart"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.05rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: '#16213e',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          transition: 'background-color 0.2s ease',
        }}
      >
        🛒 Cart <span style={{
          backgroundColor: '#e94560',
          borderRadius: '50%',
          padding: '0.1rem 0.5rem',
          fontSize: '0.85rem',
          fontWeight: 'bold',
        }}>{cartCount}</span>
      </Link>
    </nav>
  );
}

export default Navbar;