import React, { useState } from 'react';
import './login.css';

const Signup = () => {
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup Data:', {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    });
  };

  return (
    <div className='Sign'>
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
      <button onClick={handleSignup}>Register</button>
    </div>
  );
};

export default Signup;
