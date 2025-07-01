import React, { useEffect, useState } from "react";
import './Cart.css'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    try {
      const res = await fetch(`http://localhost:8080/cart/${userId}`);
      const data = await res.json();

      if (data.success) {
        const filteredItems = data.cart.filter((item) => item.productId);
        setCartItems(filteredItems);

        const totalAmount = filteredItems.reduce((acc, item) => {
          return acc + (item.productId?.price || 0) * item.quantity;
        }, 0);
        setTotal(totalAmount);
      } else {
        console.error("❌ Failed to fetch cart");
      }
    } catch (err) {
      console.error("🛑 Cart fetch error:", err.message);
    }
  };

  const handleRemoveFromCart = async (cartItemId) => {
    try {
      const res = await fetch(`http://localhost:8080/cart/remove/${cartItemId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        fetchCart(); // Refresh cart
      } else {
        alert("Failed to remove item");
      }
    } catch (err) {
      console.error("Remove error:", err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="add-cart">
      <h2>Your Cart</h2>

      <div className="cart-product">
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <strong>{item.productId?.name || "Unknown Product"}</strong> – ₹
              {item.productId?.price || 0} × {item.quantity}{" "}
              <button onClick={() => handleRemoveFromCart(item._id)} style={{ marginLeft: "10px", color: "red" }}>
                🗑 Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
};

export default CartPage;
