import React, { CSSProperties } from 'react';
import './Button.css';

type ButtonProps = {
  type: 'none' | 'fill';
  value: string;
  style?: CSSProperties;
  click?: (e: React.MouseEvent<HTMLElement>) => void;
};

function Button(props: ButtonProps) {
  if (props.type == 'none')
    return (
      <button
        onClick={props.click}
        className="myButton_none"
        type="button"
        style={props.style}
      >
        {props.value}
      </button>
    );
  return (
    <button
      onClick={props.click}
      className="myButton_fill"
      type="button"
      style={props.style}
    >
      {props.value}
    </button>
  );
}

export default Button;
