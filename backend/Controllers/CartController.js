import Cart from '../Models/Cart.js';
import ProductModel from "../Models/product.js";
import CartModel from '../Models/Cart.js'
import UserModel from '../Models/user.js';


export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({
        success: false,
        message: "Missing userId or productId",
      });
    }

    // ✅ Check if user exists
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // ✅ Check if product exists
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // ✅ Add to cart
    const cartItem = new CartModel({
      userId,
      productId,
      quantity,
    });

    await cartItem.save();

    res.status(200).json({
      success: true,
      message: "Added to cart",
    });

  } catch (err) {
    console.error("❌ Cart error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getCartItems = async (req, res) => {
  try {
    const userId = req.params.userId;

    const cart = await CartModel.find({ userId }).populate("productId");

    if (!cart || cart.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No items in cart for this user",
      }); 
    }

    return res.status(200).json({
      success: true,
      cart,
    });
  } catch (err) {
    console.error("Error in getCartItems:", err.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    }); 
  }
};




export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

    res.status(200).json({ success: true, cart });
  } catch (err) {
    console.error('Get cart error:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId != productId);
    await cart.save();

    res.status(200).json({ success: true, message: 'Item removed from cart', cart });
  } catch (err) {
    console.error('Remove from cart error:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Item removed from cart" });
  } catch (err) {
    console.error("❌ Remove Cart Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



