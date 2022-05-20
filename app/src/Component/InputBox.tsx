import React, { CSSProperties } from 'react';
import {
  MouseEventHandler,
  ChangeEventHandler,
  KeyboardEventHander,
} from '../Type/EventHandlerProps';
import { ReactTooltipProps } from '../Type/ReactTooltipProps';
import './CSS/InputBox.css';

type InputBoxProps = KeyboardEventHander &
  ChangeEventHandler &
  MouseEventHandler &
  ReactTooltipProps & {
    placeholder: string;
    style?: CSSProperties;
    type?: string;
    valid?: boolean;
  };

function InputBox(props: InputBoxProps) {
  return <input required className="myInputBox" type="text" {...props}></input>;
}

export default InputBox;
