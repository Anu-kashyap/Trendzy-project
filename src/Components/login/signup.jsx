import React, { useState } from 'react';
import './login.css';

const Signup = () => {
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    try {
      const res = await fetch("http://localhost:8080/auth/signup", {
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
        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Signup error:", err.message);
    }
  };

  return (
    <form className='Sign' onSubmit={handleSignup}>
      <p>Sign Up</p>
      <div className="input-box">
        <input type="text" placeholder='Name' value={signupName} onChange={(e) => setSignupName(e.target.value)} />
      </div>
      <div className="input-box">
        <input type="email" placeholder='Email' value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password' value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
      </div>
      <div className="login-here">
        <p>Already have an account?</p>
        <a href="/login">Login Here</a>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
