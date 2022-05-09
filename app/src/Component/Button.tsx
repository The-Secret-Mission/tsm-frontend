import React, { CSSProperties } from 'react';
import './Button.css';

type ButtonProps = {
  value: string;
  style?: CSSProperties;
};

function Button(props: ButtonProps) {
  return (
    <button className="myButton" type="button" style={props.style}>
      {props.value}
    </button>
  );
}

export default Button;
