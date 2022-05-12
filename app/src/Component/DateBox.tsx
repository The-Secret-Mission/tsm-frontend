import React, { CSSProperties } from 'react';
import { EventHandlerProps } from '../Type/EventHandlerProps';
import { ReactTooltipProps } from '../Type/ReactTooltipProps';
import './DateBox.css';

type DateBoxProps = EventHandlerProps &
  ReactTooltipProps & {
    min?: string;
    max?: string;
    style?: CSSProperties;
  };

function DateBox(props: DateBoxProps) {
  return <input className="myDateBox" type="date" {...props}></input>;
}

export default DateBox;
