import React, { CSSProperties } from 'react';
import { MouseEventHandler } from '../Type/EventHandlerProps';

import './Button.css';

type ButtonProps = MouseEventHandler & {
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
