import React from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AcceptedListInfo } from '../Type/AcceptedList';

import './CSS/AcceptedList.css';

type AcceptedListProps = {
  data: AcceptedListInfo;
};
function AcceptedList(props: AcceptedListProps) {
  const navigate = useNavigate();

  return (
    <li
      className="acceted_list"
      onClick={() => {
        if (props.data.groupid.length != 0)
          return navigate('/agency/' + props.data.groupid);
      }}
    >
      <Stack direction="horizontal">
        <p className="acceted_element" style={{ width: '35%' }}>
          {props.data.name}
        </p>
        <p className="acceted_element" style={{ width: '35%' }}>
          {props.data.due}
        </p>
        <p className="acceted_element" style={{ width: '30%' }}>
          {props.data.budget}
        </p>
      </Stack>
    </li>
  );
}

export default AcceptedList;
