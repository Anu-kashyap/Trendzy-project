import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (data.success) {
        localStorage.setItem("jwtToken", data.jwtToken);
        localStorage.setItem("userId", data.userId);
        alert("✅ Login successful!");
        window.location.href = "/";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Something went wrong, try again");
    }
  };

  return (
    <div className='login'>
      <p>Login</p>
      <div className="input-box">
        <input
          type="email"
          placeholder='Email'
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder='Password'
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      <div className="create-account">
        <p>Forgot your password?</p>
        <Link to="/signup">Create Account</Link>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
