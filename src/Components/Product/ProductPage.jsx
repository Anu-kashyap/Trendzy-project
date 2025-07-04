import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      const res = await fetch("https://trendzy-project-2.onrender.com/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setProducts(data.products);
      } else {
        console.error("Failed to load products:", data.message);
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

  const handleCheckout = (id) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("❌ Please login to proceed to checkout.");
      return;
    }
    navigate(`/product/${id}`);
  };

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
              <button onClick={() => handleCheckout(product._id)} className='Cart-button'>
                Checkout
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
