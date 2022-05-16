import React, { CSSProperties } from 'react';
import './CSS/NoticeLine.css';

type NoticeLineProps = {
  content: string;
  style?: CSSProperties;
};
function NoticeLine(props: NoticeLineProps) {
  return (
    <p id="notice" style={props.style}>
      {props.content}
    </p>
  );
}

export default NoticeLine;
