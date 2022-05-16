import React, { CSSProperties, useEffect, useState } from 'react';
import MenuBar from '../Component/Menubar';
import PasswordRecheckModule from '../Module/PasswordRecheckModule';
import UpdateMyInfoModule from '../Module/UpdateMyInfoModule';

import './CSS/MyInfo.css';

function MyInfo() {
  const [pass, setPass] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 250; //Math.max(300, windowHeight * 0.5);
  const newW = (windowWidth - contentWidth) / 2;
  const newH = (windowHeight - contentHeight) / 2;
  const menuberH = windowWidth * 0.1;
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      });
    };
  }, []);
  const style: CSSProperties = {
    position: 'relative',
    paddingTop: newH - menuberH + 'px',
    paddingLeft: newW + 'px',
    paddingBottom: newH + menuberH + 'px',
    paddingRight: newW + 'px',
    transition: '500ms',
  };
  if (!pass)
    return (
      <div className="page">
        <PasswordRecheckModule
          style={style}
          setPass={setPass}
        ></PasswordRecheckModule>
        <MenuBar></MenuBar>
      </div>
    );
  else
    return (
      <div className="page">
        <UpdateMyInfoModule style={style}></UpdateMyInfoModule>
        <MenuBar></MenuBar>
      </div>
    );
}

export default MyInfo;
