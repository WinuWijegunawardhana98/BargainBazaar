import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './context/cartContext'; 

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setNavbarVisible(true);
    }, 100);
  }, []);

  const navbarStyle = {
    backgroundColor: '#008080',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.8s ease-in-out',
    transform: navbarVisible ? 'translateY(0)' : 'translateY(-100%)',
    position: 'relative', 
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
  };

  const liStyle = {
    marginRight: '1rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#FF6F61',
  };

  const cartIconStyle = {
    position: 'absolute',
    right: '30px', 
    top: '20%', 
    transform: 'translateY(-50%)',
  };

  return (
    <nav style={navbarStyle}>
      <h1>BargainBazaar</h1>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/add-product"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            Add Product
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/signup"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            Signup
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/login"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            Login
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/wishlist"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
          >
            Wishlist
          </Link>
        </li>
      </ul>
      
      <div style={cartIconStyle}>
        <Link
          to="/cart"
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItems.length > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '4px 8px',
                fontSize: '0.8rem',
              }}
            >
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
