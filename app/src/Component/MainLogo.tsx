import React, { CSSProperties } from 'react';

const imgWidth = Math.max(window.innerWidth * 0.5, 300);
const newW = (window.innerWidth - imgWidth) / 2 + 'px';
const newH = (window.innerHeight - imgWidth) / 2 + 'px';

const img_nonblur: CSSProperties = {
  width: imgWidth + 'px',
  height: imgWidth,
  position: 'fixed',
  top: `${newH}`,
  left: `${newW}`,
  opacity: '1',
  transition: 'opacity 400ms',
  zIndex: 1,
};

const img_blur: CSSProperties = {
  width: imgWidth + 'px',
  height: imgWidth,
  position: 'fixed',
  top: `${newH}`,
  left: `${newW}`,
  opacity: '0.3',
  transition: 'opacity 400ms, visibility 400ms',
  zIndex: 1,
};

type MainLogoProps = {
  type: 'blur' | 'non_blur';
  click?: (e: React.MouseEvent<HTMLElement>) => void;
};
function MainLogo(props: MainLogoProps) {
  if (props.type == 'blur')
    return (
      <img
        className="main_logo"
        onClick={props.click}
        style={img_blur}
        src={`${process.env.PUBLIC_URL}/logo.png`}
      ></img>
    );
  else
    return (
      <img
        className="main_logo"
        onClick={props.click}
        style={img_nonblur}
        src={`${process.env.PUBLIC_URL}/logo.png`}
      ></img>
    );
}

export default MainLogo;
