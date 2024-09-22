import React, { useState } from 'react';
import axios from 'axios';

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    imageURL: '',
    category: '',
    stock: '',
    createdAt: '',
    updatedAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', product);
      alert('Product added successfully');
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  // Overall container styling
  const pageStyle = {
    padding: '2rem',
    maxWidth: '700px',
    margin: '2rem auto',  
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
    borderRadius: '10px',  
  };

  // Input fields styling
  const inputStyle = {
    display: 'block',
    marginBottom: '1.5rem',
    padding: '0.75rem',
    width: '100%',
    fontSize: '1rem',
    borderRadius: '5px', 
    border: '1px solid #ccc',
    boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)',  
  };

  // Submit button styling
  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '1.5rem',
    width: '100%',  
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  };

  // Add hover effect to the button
  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#218838',
  };

  // Use state to track hover
  const [hover, setHover] = useState(false);

  

  return (
    <div style={pageStyle}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '1.5rem' }}>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price"
          required
          style={inputStyle}
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
          rows="4"
          style={inputStyle}
        ></textarea>
        <input
          type="text"
          name="imageURL"
          value={product.imageURL}
          onChange={handleChange}
          placeholder="Image URL"
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock Quantity"
          required
          style={inputStyle}
        />
        <input
          type="date"
          name="createdAt"
          value={product.createdAt}
          onChange={handleChange}
          placeholder="Created At"
          required
          style={inputStyle}
        />
        <input
          type="date"
          name="updatedAt"
          value={product.updatedAt}
          onChange={handleChange}
          placeholder="Updated At"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={hover ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
