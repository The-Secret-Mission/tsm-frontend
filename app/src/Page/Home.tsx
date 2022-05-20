import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLogo from '../Component/MainLogo';
import LoginModule from '../Module/LoginModule';
import './CSS/Home.css';

function Home() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="page">
      {open ? <LoginModule setter={setOpen} /> : null}
      <MainLogo
        type={open ? 'blur' : 'non_blur'}
        onClick={() => {
          const cur = open;
          if (!cur && !checked)
            axios
              .get('http://localhost:4242/auth/checklogin')
              .then(() => {
                return navigate('/main');
              })
              .catch(() => {
                console.log('');

                setChecked(true);
              });
          setOpen(!open);
        }}
      ></MainLogo>
    </div>
  );
}

export default Home;
