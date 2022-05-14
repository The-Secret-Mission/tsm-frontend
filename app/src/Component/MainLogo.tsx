import React, { CSSProperties, useEffect, useState } from 'react';
import { MouseEventHandler } from '../Type/EventHandlerProps';

// const imgWidth = Math.max(window.innerWidth * 0.5, 300);
// const newW = (window.innerWidth - imgWidth) / 2 + 'px';
// const newH = (window.innerHeight - imgWidth) / 2 + 'px';

// const img_nonblur: CSSProperties = {
//   width: imgWidth + 'px',
//    height: imgWidth + 'px',
//   position: 'fixed',
//   top: `${newH}`,
//   left: `${newW}`,
//   opacity: '1',
//   transition: 'opacity 400ms',
//   zIndex: 1,
// };

// const img_blur: CSSProperties = {
//   width: imgWidth + 'px',
//    height: imgWidth + 'px',
//   position: 'fixed',
//   top: `${newH}`,
//   left: `${newW}`,
//   opacity: '0.3',
//   transition: 'opacity 400ms, visibility 400ms',
//   zIndex: 1,
// };

type MainLogoProps = MouseEventHandler & {
  type: 'blur' | 'non_blur';
};

function MainLogo(props: MainLogoProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const imgWidth = Math.max(300, windowWidth * 0.5);
  const newW = (windowWidth - imgWidth) / 2;
  const newH = (windowHeight - imgWidth) / 2;
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
  const img_nonblur: CSSProperties = {
    width: imgWidth + 'px',
    height: imgWidth + 'px',
    position: 'fixed',
    top: newH * 0.9 + 'px',
    left: newW + 'px',
    opacity: '1',
    transition: 'opacity 300ms',
    zIndex: 1,
  };

  const img_blur: CSSProperties = {
    width: imgWidth + 'px',
    height: imgWidth + 'px',
    position: 'fixed',
    top: newH * 0.9 + 'px',
    left: newW + 'px',
    opacity: '0.3',
    transition: '500ms',
    zIndex: 1,
  };

  if (props.type == 'blur')
    return (
      <img
        className="main_logo"
        {...props}
        style={img_blur}
        src={`${process.env.PUBLIC_URL}/logo.png`}
      ></img>
    );
  else
    return (
      <img
        className="main_logo"
        {...props}
        style={img_nonblur}
        src={`${process.env.PUBLIC_URL}/logo.png`}
      ></img>
    );
}

export default MainLogo;
