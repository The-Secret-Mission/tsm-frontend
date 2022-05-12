import React, { CSSProperties } from 'react';
import { EventHandlerProps } from '../Type/EventHandlerProps';
import { ReactTooltipProps } from '../Type/ReactTooltipProps';
import './InputBox.css';

type InputBoxProps = EventHandlerProps &
  ReactTooltipProps & {
    placeholder: string;
    style?: CSSProperties;
  };

function InputBox(props: InputBoxProps) {
  return <input className="myInputBox" type="text" {...props}></input>;
}

export default InputBox;
