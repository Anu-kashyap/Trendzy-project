import ProductModel from '../Models/product.js';


export const addProduct = async (req, res) => {
  // Extract data
  const { name, description, price, image, sizes } = req.body;

  // Save to MongoDB
  const newProduct = new ProductModel({ name, description, price, image, sizes });
  await newProduct.save();

  res.status(201).json({
    message: "Product added successfully",
    success: true,
    product: newProduct
  });
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      product: deletedProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};


export const getProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json({ success: true, products });
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.status(200).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


