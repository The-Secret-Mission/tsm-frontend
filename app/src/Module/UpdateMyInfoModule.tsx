import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import './CSS/UpdateMyInfoModule.css';

type UpdateMyInfoModuleProps = {
  style?: React.CSSProperties;
  setOkIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAlertIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function handlePasswordChange() {
  return Promise.resolve();
}

function UpdateMyInfoModule(props: UpdateMyInfoModuleProps) {
  const [notice, setNotice] = useState('알림이 표시됩니다');
  return (
    <div className="update_myinfo" style={props.style}>
      <Stack gap={3}>
        <p className="update_myinfo_contnet">새로운 비밀번호를 입력해주세요</p>
        <PasswordBox placeholder="새 비밀번호를 입력해주세요"></PasswordBox>
        <PasswordBox placeholder="새 비밀번호를 다시 한번 입력해주세요"></PasswordBox>
        <NoticeLine content={notice}></NoticeLine>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <Button
          style={{ color: '#FE8686' }}
          kind="none"
          value="탈퇴하기"
          onClick={() => {
            props.setAlertIsOpen(true);
          }}
        ></Button>
        <Button
          kind="fill"
          value="변경하기"
          onClick={() => {
            handlePasswordChange()
              .then(() => {
                props.setOkIsOpen(true);
              })
              .catch(() => {
                setNotice('Something went wrong');
              });
          }}
        ></Button>
      </Stack>
    </div>
  );
}

export default UpdateMyInfoModule;
