import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Signup = () => {
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://trendzy-backend.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
        }),
      });

      const data = await res.json();
      console.log("Signup response:", data);

      if (data.success) {
        alert("Signup successful!");
        navigate("/login"); // ✅ navigate instead of window.location.href
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Signup error:", err.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form className='Sign' onSubmit={handleSignup}>
      <p>Sign Up</p>
      <div className="input-box">
        <input
          type="text"
          placeholder='Name'
          value={signupName}
          onChange={(e) => setSignupName(e.target.value)}
        />
      </div>
      <div className="input-box">
        <input
          type="email"
          placeholder='Email'
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder='Password'
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
        />
      </div>
      <div className="login-here">
        <p>Already have an account?</p>
        <Link to="/login">Login Here</Link>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
