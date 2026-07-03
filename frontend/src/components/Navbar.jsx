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
      background: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(31,38,135,0.08)',
    }}>
      <Link
        to="/"
        style={{
          color: '#1a1a1a',
          textDecoration: 'none',
          fontSize: '1.6rem',
          fontWeight: 'bold',
          letterSpacing: '0.5px',
        }}
      >
        Shop<span style={{ color: '#e60023' }}>Mini</span>
      </Link>
      <Link
        to="/cart"
        style={{
          color: '#1a1a1a',
          textDecoration: 'none',
          fontSize: '1.05rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(255,255,255,0.7)',
          padding: '0.6rem 1.2rem',
          borderRadius: '30px',
          fontWeight: '600',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
          border: '1px solid rgba(255,255,255,0.8)',
        }}
      >
        🛒 Cart <span style={{
          backgroundColor: '#e60023',
          color: 'white',
          borderRadius: '50%',
          padding: '0.15rem 0.55rem',
          fontSize: '0.85rem',
          fontWeight: 'bold',
        }}>{cartCount}</span>
      </Link>
    </nav>
  );
}

export default Navbar;