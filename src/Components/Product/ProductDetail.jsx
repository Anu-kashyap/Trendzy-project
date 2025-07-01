import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
          console.log("✅ Product detail:", data.product);
          setProduct(data.product);
        } else {
          console.error("❌ Failed to fetch product:", data.message);
        }
      } catch (err) {
        console.error("🛑 Error fetching product:", err.message);
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
          size: selectedSize // ✅ Send selected size
        })
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Product added to cart!");
      } else {
        alert("❌ Failed to add to cart: " + data.message);
      }
    } catch (err) {
      console.error("❌ Add to cart error:", err.message);
      alert("Something went wrong.");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', width: '80%', marginLeft:'10%' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{width: '' }} />
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p style={{ width: '100%'}}><strong>Description:</strong> {product.description}</p>

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

      {selectedSize && (
        <div style={{ marginTop: "10px" }}>
          <p>✅ Selected Size: {selectedSize}</p>
        </div>
      )}

      <button
        onClick={handleAddToCart}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
