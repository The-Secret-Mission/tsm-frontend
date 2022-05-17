import React, { CSSProperties } from 'react';
import './XIcon.css';
type XButtonProps = {
  style?: CSSProperties;
  onClick?: (e: any) => void;
};

function XButton(props: XButtonProps) {
  return (
    <div
      style={{ width: '8%', height: '100%', borderRadius: '5px' }}
      id="button_background"
      onClick={props.onClick}
    >
      <svg
        id="x_button"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 473.000000 474.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,474.000000) scale(0.100000,-0.100000)"
          fill="white"
          stroke="none"
        >
          <path
            d="M585 4456 c-77 -25 -126 -57 -223 -151 -103 -99 -147 -164 -172 -258
 -19 -72 -9 -180 25 -257 27 -61 68 -105 744 -783 l716 -717 -711 -713 c-391
 -391 -720 -728 -732 -747 -49 -85 -66 -219 -38 -311 27 -88 59 -134 162 -237
 80 -80 118 -110 170 -134 116 -54 267 -49 374 14 19 12 356 341 747 732 l713
 711 717 -716 c678 -676 722 -717 783 -744 119 -52 240 -46 363 18 82 43 239
 208 280 295 53 114 47 266 -15 372 -12 19 -341 356 -732 747 l-711 713 711
 712 c391 392 720 729 731 748 65 112 71 255 15 375 -41 87 -195 248 -281 293
 -121 63 -242 69 -361 17 -61 -27 -105 -68 -783 -744 l-717 -716 -718 717
 c-394 394 -732 724 -751 733 -89 45 -221 58 -306 31z"
          />
        </g>
      </svg>
    </div>
  );
}

export default XButton;
