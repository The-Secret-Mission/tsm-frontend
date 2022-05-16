import React from 'react';
import './CSS/Tag.css';

type TagProps = {
  color: string;
  backgroundColor?: string;
  value: string;
};

function Tag(props: TagProps) {
  return (
    <span
      className="tag"
      style={{ color: props.color, backgroundColor: props.backgroundColor }}
    >
      {props.value}
    </span>
  );
}

export default Tag;
