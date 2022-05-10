import React from 'react';
import './NoticeLine.css';

type NoticeLineProps = {
  content: string;
};
function NoticeLine(props: NoticeLineProps) {
  return <p id="notice">{props.content}</p>;
}

export default NoticeLine;
