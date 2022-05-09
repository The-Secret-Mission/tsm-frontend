import React from 'react';
import './InputBox.css';

type InputBoxProps = {
  placeholder: string;
};

function InputBox(props: InputBoxProps) {
  return (
    <input
      className="myInput"
      type="text"
      placeholder={props.placeholder}
    ></input>
  );
}

export default InputBox;
