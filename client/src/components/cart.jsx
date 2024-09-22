import React from 'react';
import { useCart } from './context/cartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  return (
    <div
      style={{
        position: 'absolute',
        top: '60px',
        right: '20px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        zIndex: 1000,
        width: '300px',
        borderRadius: '10px',
      }}
    >
      <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item._id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid #eee',
                }}
              >
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item._id)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    padding: '0.3rem 0.6rem',
                    marginLeft: '10px',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Total Price: ${getTotalPrice().toFixed(2)}</h3>
          <button
            onClick={clearCart}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              width: '100%',
              marginTop: '1rem',
            }}
          >
            Clear Cart
          </button>
          <button
            onClick={clearCart}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              width: '100%',
              marginTop: '1rem',
            }}
          >
            Proceed
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
