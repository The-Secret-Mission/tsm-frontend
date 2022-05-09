import React from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import './LoginModule.css';

type LoginModuleProps = {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginModule(props: LoginModuleProps) {
  return (
    <div
      className="empty_block"
      onClick={(e) => {
        const temp: any = e.target;
        if (temp.className == 'empty_block') {
          // alert('click');
          props.setter(false);
        }
      }}
    >
      <Stack gap={3} className="login_whole">
        <h3 className="welcome_message" id="welcome_message_header">
          환영합니다{' '}
        </h3>
        <p className="welcome_message" id="welcome_message_body">
          돌아오셔서 기쁨니다 하하하{' '}
        </p>
        <InputBox placeholder="email을 입력하세요"></InputBox>
        <InputBox placeholder="password을 입력하세요"></InputBox>
        <Stack direction="horizontal">
          <Button value="접속하기"></Button>
          <Button value="비밀번호 재설정"></Button>
        </Stack>
        <Button
          style={{ position: 'relative', left: '25%' }}
          value="처음 이신가요?"
        ></Button>
      </Stack>
    </div>
  );
}

export default LoginModule;