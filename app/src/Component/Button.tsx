import React, { CSSProperties } from 'react';
import './Button.css';

type ButtonProps = {
  type: 'none' | 'fill';
  value: string;
  style?: CSSProperties;
};

function Button(props: ButtonProps) {
  if (props.type == 'none')
    return (
      <button className="myButton_none" type="button" style={props.style}>
        {props.value}
      </button>
    );
  return (
    <button className="myButton_fill" type="button" style={props.style}>
      {props.value}
    </button>
  );
}

export default Button;
