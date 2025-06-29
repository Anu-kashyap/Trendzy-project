import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    console.log('Login Data:', {
      email: loginEmail,
      password: loginPassword,
    });
  };

  return (
    <div className='login'>
      <p>Login</p>
      <div className="input-box">
        <input type="email" placeholder='Email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
      </div>
      <div className="create-account">
        <p>Forgot your password?</p>
        <a href="/signup">Create Account</a>
      </div>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;
