import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

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

  const searchQuery = new URLSearchParams(location.search).get('search')?.toLowerCase();
  const filteredProducts = searchQuery
    ? products.filter(product =>
      product.name.toLowerCase().includes(searchQuery)
    )
    : products;

  return (
    <div className='Product-page'>
      <h2>Products</h2>
      <div className="products">
        {filteredProducts.length === 0 ? (
          <p style={{ padding: '20px', fontWeight: 'bold' }}>🔍 No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-card">
              <Link to={`/product/${product._id}`} className="product-link">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
              <p>₹{product.price}</p>
              <Link to={`/product/${product._id}`}>
                <button className='Cart-button'>Checkout</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
