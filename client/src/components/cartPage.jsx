import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/cartContext'; 

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Access cart and remove function

  const pageStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    textAlign: 'center',
  };

  const productImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
  };

  const productDetailsStyle = {
    marginTop: '1rem',
  };

  const linkStyle = {
    marginTop: '1rem',
    display: 'block',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const removeButtonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={pageStyle}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <div style={productGridStyle}>
          {cartItems.map((product) => (
            <div key={product._id} style={cardStyle}>
              <img
                src={product.imageURL}
                alt={product.name}
                style={productImageStyle}
              />
              <div style={productDetailsStyle}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <Link
                  to={`/product/${product._id}`}
                  style={linkStyle}
                >
                  View Details
                </Link>
                <button
                  style={removeButtonStyle}
                  onClick={() => removeFromCart(product._id)} // Remove from cart
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
