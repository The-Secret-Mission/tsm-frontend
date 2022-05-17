import React from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CSS/AcceptedList.css';

type AcceptedListProps = {
  data: string[];
};
function AcceptedList(props: AcceptedListProps) {
  const navigate = useNavigate();

  return (
    <li
      className="acceted_list"
      onClick={() => {
        if (props.data[3]) return navigate('/agency/' + props.data[3]);
      }}
    >
      <Stack direction="horizontal">
        <p className="acceted_element" style={{ width: '40%' }}>
          {props.data[0]}
        </p>
        <p className="acceted_element" style={{ width: '30%' }}>
          {props.data[1]}
        </p>
        <p className="acceted_element" style={{ width: '30%' }}>
          {props.data[2]}
        </p>
      </Stack>
    </li>
  );
}

export default AcceptedList;
