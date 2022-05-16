import React from 'react';

function ClosedLetter() {
  return (
    <svg
      style={{ marginLeft: '25%' }}
      width="50%"
      viewBox="0 0 400 200"
      onClick={() => {
        alert('기다려');
      }}
    >
      <rect
        width="100%"
        height="100%"
        x="0"
        y="0"
        fill="#BF933E"
        stroke="black"
        strokeWidth={2}
      ></rect>
      <polygon
        id="bottom"
        points="0 200, 400 200, 240 80, 160 80"
        stroke="black"
        fill="#BF933E"
        strokeWidth={2}
      ></polygon>
      <polygon
        id="top"
        points="0 0, 400 0, 240 110, 160 110"
        stroke="black"
        fill="#BF933E"
        strokeWidth={2}
      ></polygon>

      <text
        x="50%"
        y="40%"
        fill="white"
        fontWeight="bold"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="1.7rem"
      >
        내 미션 확인하기
      </text>
    </svg>
  );
}

export default ClosedLetter;
