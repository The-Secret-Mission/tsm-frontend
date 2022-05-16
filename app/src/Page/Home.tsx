import React, { useState } from 'react';
import MainLogo from '../Component/MainLogo';
import LoginModule from '../Module/LoginModule';
import './CSS/Home.css';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      {open ? <LoginModule setter={setOpen} /> : null}
      <MainLogo
        type={open ? 'blur' : 'non_blur'}
        onClick={() => {
          setOpen(!open);
        }}
      ></MainLogo>
    </div>
  );
}

export default Home;
