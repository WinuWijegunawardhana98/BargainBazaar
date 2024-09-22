import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './context/cartContext';
import { useWishlist } from './context/wishlistContext'; 

const defaultImage = '/default-image.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!product) return <h2>Product not found.</h2>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{product.name}</h2>
      <img
        src={product.imageURL || defaultImage}
        alt={product.name}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '4px',
          marginTop: '1rem',
          marginRight: '1rem',
        }}
      >
        Add to Cart
      </button>
      
      <button
        onClick={() => addToWishlist(product)} 
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          backgroundColor: '#FF6F61',
          color: '#FFF',
          border: 'none',
          borderRadius: '4px',
          marginTop: '1rem',
        }}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductDetail;
