import React, { CSSProperties } from 'react';
import { EventHandlerProps } from '../Type/EventHandlerProps';
import './Button.css';

type ButtonProps = EventHandlerProps & {
  kind: 'none' | 'fill';
  value: string;
  style?: CSSProperties;
};

function Button(props: ButtonProps) {
  if (props.kind == 'none')
    return (
      <button className="myButton_none" type="button" {...props}>
        {props.value}
      </button>
    );
  return (
    <button className="myButton_fill" type="button" {...props}>
      {props.value}
    </button>
  );
}

export default Button;
