import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8080/products/${id}`);
        const data = await res.json();
        if (data.success) {
          setProduct(data.product);
        }
      } catch (err) {
        console.error("Error fetching product:", err.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please login first.");
      return;
    }

    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          productId: id,
          quantity: 1,
          size: selectedSize
        })
      });

      const data = await res.json();
      if (data.success) {
        alert("Product added to cart!");
      } else {
        alert("Failed to add to cart: " + data.message);
      }
    } catch (err) {
      console.error("Add to cart error:", err.message);
      alert("Something went wrong.");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className='Product-detail'>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ₹{product.price}</p>


      <div>
        <h4>Select Size:</h4>
        {product.sizes && product.sizes.length > 0 ? (
          product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                margin: '5px',
                padding: '8px 16px',
                backgroundColor: selectedSize === size ? '#000' : '#eee',
                color: selectedSize === size ? '#fff' : '#000',
                borderRadius: '5px',
                border: '1px solid #ccc',
                cursor: 'pointer'
              }}
            >
              {size}
            </button>
          ))
        ) : (
          <p>No sizes available</p>
        )}
      </div>
      <p className='product-desc'><strong>Description:</strong> {product.description}</p>

      {selectedSize && (
        <div style={{ marginTop: "10px" }}>
          <p>✅ Selected Size: {selectedSize}</p>
        </div>
      )}

      <button onClick={handleAddToCart} className='Cart-button'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
