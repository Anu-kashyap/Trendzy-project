import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from "../Models/user.js";
import process from 'process';

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: 'User already exists, please login',
        success: false
      });
    }

    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Save new user
    const userModel = new UserModel({ name, email, password: hashedPassword });
    await userModel.save();

    // 4. Return success
    res.status(201).json({
      message: "Signup successful",
      success: true
    });

  } catch (error) {
    console.error("❌ Signup Error:", error.message); // log the actual error
    res.status(500).json({
      message: error.message,
      success: false
    });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = 'Auth failed email or password is wrong';
    if (!user) {
      return res.status(403)
        .json({ message: errorMsg, success: false })
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403)
        .json({ message: errorMsg, success: false })
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )
    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      userId: user._id, // ✅ add this line
      email,
      name: user.name
    });

  } catch {
    res.status(500)
      .json({
        message: "Internal Server error",
        success: false
      });
  }
}

export default { signup, login };