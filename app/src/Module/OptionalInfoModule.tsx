import React, { CSSProperties, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import NoticeLine from '../Component/NoticeLine';
import './OptionalInfoModule.css';

type OptionalInfoModuleProps = {
  setter: React.Dispatch<React.SetStateAction<number>>;
  style?: CSSProperties;
};
function OptionalInfoModule(props: OptionalInfoModuleProps) {
  const [message, setMessage] = useState<string>('');
  return (
    <div className="page" id="nodule-invited-info" style={props.style}>
      {' '}
      <Stack>
        <p id="ca_welcom_message">요원님 안녕하세요</p>
        <p>조직의 요원들에게 메시지를 남겨주세요</p>
        <p id="ca_warning">생성 이후에도 변경이 가능합니다</p>
      </Stack>
      <textarea
        id="text_area"
        placeholder="옵션. 최대 200자 입력가능합니다. "
        maxLength={200}
        style={{
          width: '100%',
          height: '230px',
          backgroundColor: 'rgb(255,255,255,0.2)',
          borderRadius: '20px',
          padding: '1rem',
          color: 'white',
          overflowY: 'scroll',
          resize: 'none',
        }}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <NoticeLine content={`${message.length}/200`}></NoticeLine>
      <Stack direction="horizontal" gap={3}>
        <Button
          kind="none"
          value="이전으로"
          onClick={() => {
            props.setter(1);
          }}
        ></Button>
        <Button
          kind="fill"
          value="창설하기"
          onClick={() => {
            alert('성공');
          }}
        ></Button>
      </Stack>
    </div>
  );
}

export default OptionalInfoModule;
