import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import './PasswordRecheckModule.css';
type PasswordRecheckModuleProp = {
  setPass: React.Dispatch<React.SetStateAction<boolean>>;
};

function PasswordRecheckModule(props: PasswordRecheckModuleProp) {
  const [notice, setNotice] = useState(' ');
  return (
    <div className="password_recheck">
      <section id="content">
        <h1 style={{ textAlign: 'center' }}>jikwon@gmail.com</h1>
        <p style={{ textAlign: 'right' }}>로 접속하셨습니다</p>
      </section>
      <PasswordBox
        style={{ width: '100%' }}
        placeholder="패스워드를 입력해주세요"
      ></PasswordBox>
      <NoticeLine content={notice}></NoticeLine>
      <Stack direction="horizontal" gap={2}>
        <Button
          click={(e) => {
            e.preventDefault();
            setNotice('wrong password');
          }}
          type="none"
          value="뒤로가기"
        ></Button>
        <Button
          click={(e) => {
            e.preventDefault();
            props.setPass(true);
          }}
          type="fill"
          value="확인"
        ></Button>
      </Stack>
    </div>
  );
}

export default PasswordRecheckModule;
