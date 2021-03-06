import React from 'react';
import { Stack } from 'react-bootstrap';
import { MouseEventHandler } from '../Type/EventHandlerProps';
import './CSS/InvitedList.css';

type InvitedListProps = MouseEventHandler & {
  data: string[];
  key: number;
};

function InvitedList(props: InvitedListProps) {
  return (
    <li onClick={props.onClick}>
      <Stack direction="horizontal">
        <p
          className="invited_element"
          style={{ width: '50%', paddingRight: '5px' }}
        >
          {props.data[0]}
        </p>
        <p
          className="invited_element"
          style={{ width: '50%', paddingRight: '5px' }}
        >
          {props.data[1]}
        </p>
      </Stack>
    </li>
  );
}

export default InvitedList;
