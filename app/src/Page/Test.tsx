import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import SignupModule from '../Module/SignupModule';
// import './Signup.css';

function Test() {
  // const [open, setOpen] = useState(false);
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
    return <div>HI</div>;
  }
  return <div>What are you?</div>;
}

export default Test;
