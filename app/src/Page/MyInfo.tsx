import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuBar from '../Component/Menubar';
import PasswordRecheckModule from '../Module/PasswordRecheckModule';
import UpdateMyInfoModule from '../Module/UpdateMyInfoModule';

import './MyInfo.css';

function MyInfo() {
  const [pass, setPass] = useState(false);
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
    if (!pass)
      return (
        <div className="page">
          <PasswordRecheckModule setPass={setPass}></PasswordRecheckModule>
          <MenuBar></MenuBar>
        </div>
      );
    else
      return (
        <div className="page">
          <UpdateMyInfoModule></UpdateMyInfoModule>
          <MenuBar></MenuBar>
        </div>
      );
  }
  return <div>What are you?</div>;
}

export default MyInfo;
