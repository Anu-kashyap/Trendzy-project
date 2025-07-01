import React, { useState } from 'react';
import "./AddProject.css";

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, description, price, image })
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Product added successfully!");
        setName('');
        setDescription('');
        setPrice('');
        setImage('');
      } else {
        alert("❌ Failed: " + data.message);
      }
    } catch (err) {
      console.error("Error adding product:", err.message);
      alert("Something went wrong, try again!");
    }
  };

  return (
    <div className='Add-product'>
      <h2>Add New Product</h2>
      <form className='form-Add-product' onSubmit={handleAddProduct}>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price (₹)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
