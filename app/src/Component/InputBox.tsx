import React, { CSSProperties } from 'react';
import {
  MouseEventHandler,
  ChangeEventHandler,
  KeyboardEventHander,
} from '../Type/EventHandlerProps';
import { ReactTooltipProps } from '../Type/ReactTooltipProps';
import './InputBox.css';

type InputBoxProps = KeyboardEventHander &
  ChangeEventHandler &
  MouseEventHandler &
  ReactTooltipProps & {
    placeholder: string;
    style?: CSSProperties;
  };

function InputBox(props: InputBoxProps) {
  return <input className="myInputBox" type="text" {...props}></input>;
}

export default InputBox;
