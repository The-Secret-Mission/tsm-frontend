import React from 'react';
import MainLogo from '../Component/MainLogo';
import SignupModule from '../Module/SignupModule';
import './Signup.css';

function Signup() {
  return (
    <div className="page">
      <MainLogo type="blur"></MainLogo>
      <SignupModule></SignupModule>
    </div>
  );
}

export default Signup;
