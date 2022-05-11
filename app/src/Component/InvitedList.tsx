import React from 'react';
import { Stack } from 'react-bootstrap';
import './InvitedList.css';

type InvitedListProps = {
  data: string[];
};

function InvitedList(props: InvitedListProps) {
  return (
    <li>
      <Stack direction="horizontal">
        <p className="invited_element" style={{ width: '50%' }}>
          {props.data[0]}
        </p>
        <p className="invited_element" style={{ width: '50%' }}>
          {props.data[1]}
        </p>
      </Stack>
    </li>
  );
}

export default InvitedList;
