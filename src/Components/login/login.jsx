import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

 
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  
  const handleLogin = () => {
    console.log('Login Data:', {
      email: loginEmail,
      password: loginPassword,
    });
  };


  const handleSignup = () => {
    console.log('🔵 Signup Data:', {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    });
  };

  return (
    <>
      {showLogin ? (
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
            <a href="#" onClick={() => setShowLogin(false)}>Create Account</a>
          </div>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      ) : (
        <div className='Sign'>
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
            <a href="#" onClick={() => setShowLogin(true)}>Login Here</a>
          </div>
          <button onClick={handleSignup}>Register</button>
        </div>
      )}
    </>
  );
};

export default Login;
