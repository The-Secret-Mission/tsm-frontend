import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MainLogo from '../Component/MainLogo';
import LoginModule from '../Module/LoginModule';
import './Home.css';

function Home() {
  const [open, setOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  if (isDesktopOrLaptop && isLandscape) {
    return <div>hello Laptop - LD</div>;
  } else if (isDesktopOrLaptop && isPortrait) {
    return <div>hello Laptop - PT</div>;
  } else if (isTabletOrMobile && isLandscape) {
    return <div>hello Mobile - LD</div>;
  } else if (isTabletOrMobile && isPortrait) {
    return (
      <div className="page">
        {open ? <LoginModule setter={setOpen} /> : null}
        <MainLogo
          type={open ? 'blur' : 'non_blur'}
          click={() => {
            setOpen(!open);
          }}
        ></MainLogo>
      </div>
    );
  }
  return <div>What are you?</div>;
}

export default Home;
