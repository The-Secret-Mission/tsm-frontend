import React, { CSSProperties } from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import './LoginModule.css';

const imgWidth = Math.max(window.innerWidth * 0.5, 300);
const newW = (window.innerWidth - imgWidth) / 2 + 'px';
const newH = (window.innerHeight - imgWidth) / 2 + 'px';

const style: CSSProperties = {
  width: '100%',
  position: 'fixed',
  paddingTop: newH,
  paddingLeft: newW,
  paddingBottom: newH,
  paddingRight: newW,
  zIndex: 2,
  transition: '500ms',
  opacity: 1,
};
type LoginModuleProps = {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
};

console.log(newW);
function LoginModule(props: LoginModuleProps) {
  return (
    <div
      className="empty_block"
      style={style}
      onClick={(e) => {
        const temp: any = e.target;
        console.log(temp.className);
        if (temp.className == 'empty_block') {
          // alert('click');
          props.setter(false);
        }
      }}
    >
      <Stack gap={2} className="login_stack">
        <h3 className="welcome_message" id="welcome_message_header">
          환영합니다{' '}
        </h3>
        <p className="welcome_message" id="welcome_message_body">
          돌아오셔서 기쁨니다 하하하{' '}
        </p>
        <InputBox placeholder="email을 입력하세요"></InputBox>
        <PasswordBox placeholder="password을 입력하세요"></PasswordBox>
        <NoticeLine content="알림이 표시됩니다"></NoticeLine>
        <Stack direction="horizontal">
          <Button type="none" value="접속하기"></Button>
          <Link style={{ width: '60%' }} to="/temppwd">
            <Button
              type="none"
              style={{ width: '90%' }}
              value="비밀번호 재설정"
            ></Button>
          </Link>
        </Stack>
        <Link
          style={{ position: 'relative', left: '25%', width: '50%' }}
          to="/signup"
        >
          <Button
            type="none"
            style={{ width: '100%' }}
            value="처음 이신가요?"
          ></Button>
        </Link>
      </Stack>{' '}
    </div>
  );
}

export default LoginModule;
