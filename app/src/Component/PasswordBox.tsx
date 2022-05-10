import React from 'react';
import './PasswordBox.css';

type PasswordBoxProps = {
  placeholder: string;
};

function PasswordBox(props: PasswordBoxProps) {
  return (
    <input
      className="myPasswordBox"
      type="password"
      placeholder={props.placeholder}
    ></input>
  );
}

export default PasswordBox;
