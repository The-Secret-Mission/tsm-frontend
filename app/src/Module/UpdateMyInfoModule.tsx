import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import './UpdateMyInfoModule.css';

function UpdateMyInfoModule() {
  const [notice, setNotice] = useState('알림이 표시됩니다');
  return (
    <div className="update_myinfo">
      <Stack gap={3}>
        <PasswordBox placeholder="새 비밀번호를 입력해주세요"></PasswordBox>
        <PasswordBox placeholder="새 비밀번호를 다시 한번 입력해주세요"></PasswordBox>
        <NoticeLine content={notice}></NoticeLine>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <Button
          style={{ color: '#FE8686' }}
          type="none"
          value="탈퇴하기"
        ></Button>
        <Button type="fill" value="변경하기"></Button>
      </Stack>
    </div>
  );
}

export default UpdateMyInfoModule;
