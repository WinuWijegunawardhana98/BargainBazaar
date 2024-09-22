import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      description,
      imageURL,
      category,
      stock,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/products', newProduct);
      onAdd(response.data); 
      
      setName('');
      setPrice('');
      setDescription('');
      setImageURL('');
      setCategory('');
      setStock('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
