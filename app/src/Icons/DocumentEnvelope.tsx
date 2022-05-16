import React from 'react';

function DocumentEnvelopeSticker() {
  return (
    <svg style={{ marginLeft: '25%' }} width="50%" viewBox="0 0 400 600">
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
        points="0 600, 400 600, 360 520, 40 520"
        stroke="black"
        fill="#BF933E"
        strokeWidth={2}
      ></polygon>
      <polygon
        id="top"
        points="0 0, 400 0, 360 80, 40 80"
        stroke="black"
        fill="#BF933E"
        strokeWidth={2}
      ></polygon>
      <polygon
        id="middle"
        points="200 80, 200 520"
        stroke="black"
        strokeWidth={2}
      ></polygon>
    </svg>
  );
}

export default DocumentEnvelopeSticker;
