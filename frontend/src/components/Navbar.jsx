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
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
        ShopMini
      </Link>
      <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;