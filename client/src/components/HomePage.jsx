import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useWishlist } from './context/wishlistContext'; 
import { useCart } from './context/cartContext'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; 

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { wishlistItems, addToWishlist } = useWishlist(); 
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setLoading(false);

        // Extract unique categories from products
        const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const isInWishlist = (productId) => wishlistItems.some(item => item._id === productId); 

  const pageStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  const categoryFilterContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '2rem',
  };

  const categoryLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginRight: '1rem',
  };

  const categorySelectStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: '#f8f9fa',
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
    position: 'relative', 
    transition: 'transform 0.3s ease',
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

  const heartIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: 'grey',
  };

  const addToCartButtonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const handleAddToCart = (product) => {
    addToCart(product); 
    alert(`${product.name} has been added to your cart!`);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={pageStyle}>
      <h2>Available Products</h2>

      {/* Category Filter */}
      <div style={categoryFilterContainerStyle}>
        <label style={categoryLabelStyle}>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={categorySelectStyle}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Cards */}
      <div style={productGridStyle}>
        {filteredProducts.map((product) => (
          <div key={product._id} style={cardStyle}>
            
            <FontAwesomeIcon
              icon={isInWishlist(product._id) ? solidHeart : regularHeart} 
              style={{
                ...heartIconStyle,
                color: isInWishlist(product._id) ? 'red' : 'grey',
              }}
              onClick={() => addToWishlist(product)} 
            />
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
                style={addToCartButtonStyle}
                onClick={() => handleAddToCart(product)} 
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
