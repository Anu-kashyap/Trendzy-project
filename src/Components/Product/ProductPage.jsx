import React, { useEffect, useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:8080/products");
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("❌ User not logged in. Please login first.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          productId,
          quantity: 1
        })
      });

      const data = await res.json();
      console.log("Add to Cart Response:", data);

      if (data.success) {
        alert("Added to cart!");
      } else {
        alert("Failed to add to cart: " + data.message);
      }
    } catch (error) {
      console.error("Add to cart error:", error.message);
      alert("Network or server error. Check your connection.");
    }
  };



  return (
    <div className='Product-page'>
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`} className="product-link">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
