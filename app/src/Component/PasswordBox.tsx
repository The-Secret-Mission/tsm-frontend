import React from 'react';
import { ChangeEventHandler } from '../Type/EventHandlerProps';
import './CSS/PasswordBox.css';

type PasswordBoxProps = ChangeEventHandler & {
  placeholder: string;
  style?: React.CSSProperties;
};

function PasswordBox(props: PasswordBoxProps) {
  return (
    <input
      required
      className="myPasswordBox"
      type="password"
      {...props}
    ></input>
  );
}

export default PasswordBox;
