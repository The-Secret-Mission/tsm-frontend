import React, { useState, CSSProperties } from 'react';
import { useMediaQuery } from 'react-responsive';
import LoginModule from '../Module/LoginModule';

const img_active: CSSProperties = {
  width: '300px',
  height: 'auto',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -70%)',
  opacity: '1',
  transition: 'opacity 400ms',
};
const img_blur: CSSProperties = {
  width: '300px',
  height: 'auto',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -70%)',
  opacity: '0.3',
  transition: 'opacity 400ms, visibility 400ms',
};
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
      <div>
        <img
          className="Home"
          src={`${process.env.PUBLIC_URL}/logo.png`}
          style={open ? img_blur : img_active}
          onClick={() => {
            setOpen(!open);
          }}
        ></img>
        {open ? <LoginModule setter={setOpen} /> : null}
      </div>
    );
  }
  return <div>What are you?</div>;
}

export default Home;
