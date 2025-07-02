import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("User ID not found");
        return;
      }

      try {
        const res = await fetch(`http://localhost:8080/cart/${userId}`);
        const data = await res.json();

        if (data.success) {
          const filteredItems = data.cart.filter(item => item.productId);
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

    fetchCart(); // ✅ Call inside useEffect
  }, []);

  const handleRemoveItem = async (cartItemId) => {
    try {
      const res = await fetch(`http://localhost:8080/cart/remove/${cartItemId}`, {
        method: "DELETE"
      });

      const data = await res.json();
      if (data.success) {
        alert("🗑️ Item removed!");
        // Refetch cart after removing
        const userId = localStorage.getItem("userId");
        const updatedCart = await fetch(`http://localhost:8080/cart/${userId}`);
        const updatedData = await updatedCart.json();

        if (updatedData.success) {
          const filteredItems = updatedData.cart.filter(item => item.productId);
          setCartItems(filteredItems);

          const newTotal = filteredItems.reduce((acc, item) => {
            return acc + (item.productId?.price || 0) * item.quantity;
          }, 0);

          setTotal(newTotal);
        }
      } else {
        alert("Failed to remove item");
      }
    } catch (err) {
      console.error("❌ Remove error:", err.message);
    }
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // navigate("/checkout");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id} style={{ marginBottom: "10px" }}>
              <strong>{item.productId?.name || "Unknown Product"}</strong> – ₹
              {item.productId?.price || 0} × {item.quantity}
              <button
                onClick={() => handleRemoveItem(item._id)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{total}</h3>

      {/* Continue Shopping Button */}
      <button
        onClick={() => navigate("/product")}
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        🛍️ Continue Shopping
      </button>

      {/* Proceed to Checkout */}
      {cartItems.length > 0 && (
        <button
          onClick={handleCheckout}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          ✅ Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPage;
