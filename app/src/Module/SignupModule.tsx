import React, { CSSProperties } from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import './SignupModule.css';

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
type SignupModuleProps = {
  //   setter: React.Dispatch<React.SetStateAction<boolean>>;
};

function SignupModule(props: SignupModuleProps) {
  console.log(props);
  return (
    <div className="empty_block" style={style}>
      <Stack gap={2} className="signup_whole">
        <h3 className="welcome_message" id="welcome_message_header">
          환영합니다{' '}
        </h3>
        <p className="welcome_message" id="welcome_message_body">
          우리의 새로운 요원으로 참여하세요{' '}
        </p>
        <InputBox placeholder="email을 입력하세요"></InputBox>
        <PasswordBox placeholder="password을 입력하세요"></PasswordBox>
        <PasswordBox placeholder="password을 입력하세요"></PasswordBox>
        <NoticeLine content="알림이 표시됩니다"></NoticeLine>
        <Stack direction="horizontal" gap={2}>
          <Link style={{ width: '60%' }} to="/">
            <Button
              kind="none"
              style={{ width: '100%' }}
              value="기존 요원이신가요?"
            ></Button>
          </Link>
          <Button kind="fill" value="가입하기"></Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default SignupModule;
