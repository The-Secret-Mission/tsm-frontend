import React from 'react';
import './CSS/PasswordBox.css';

type PasswordBoxProps = {
  placeholder: string;
  style?: React.CSSProperties;
};

function PasswordBox(props: PasswordBoxProps) {
  return (
    <input
      className="myPasswordBox"
      type="password"
      style={props.style}
      placeholder={props.placeholder}
    ></input>
  );
}

export default PasswordBox;
