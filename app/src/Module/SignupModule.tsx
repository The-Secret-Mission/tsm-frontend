import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';

import './CSS/SignupModule.css';
/*
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
*/

type SignupModuleProps = {
  // modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  //   setter: React.Dispatch<React.SetStateAction<boolean>>;
};

function handleSignup() {
  // return Promise.reject('비밀번호가 틀렸습니다');
  return Promise.resolve(1);
}
function SignupModule(props: SignupModuleProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 370; // Math.min(370, windowWidth * 0.8);
  const newW = (windowWidth - contentWidth) / 2;
  const newH = (windowHeight - contentHeight) / 2;
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      });
    };
  }, []);

  const style: CSSProperties = {
    position: 'relative',
    paddingTop: newH * 0.9 + 'px',
    paddingLeft: newW + 'px',
    paddingBottom: newH * 1.1 + 'px',
    paddingRight: newW + 'px',
    zIndex: 2,
    transition: '500ms',
    opacity: 1,
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('알림이 표시됩니다');

  return (
    <div className="empty_block" style={style}>
      <Stack gap={2} className="signup_whole">
        <h3 className="welcome_message" id="welcome_message_header">
          환영합니다{' '}
        </h3>
        <p className="welcome_message" id="welcome_message_body">
          우리의 새로운 요원으로 참여하세요{' '}
        </p>
        <InputBox
          placeholder="email을 입력하세요"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            setEmail(inputInfo.value);
          }}
        ></InputBox>
        <PasswordBox
          placeholder="password을 입력하세요"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            setPassword(inputInfo.value);
          }}
        ></PasswordBox>
        <PasswordBox
          placeholder="password을 다시 한번 입력하세요"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            if (inputInfo.value !== password)
              setErrorMessage('비밀번호가 다릅니다');
            else setErrorMessage('');
          }}
        ></PasswordBox>
        <NoticeLine content={errorMessage}></NoticeLine>
        <Stack direction="horizontal" gap={2}>
          <Link style={{ width: '60%' }} to="/">
            <Button
              kind="none"
              style={{ width: '100%' }}
              value="기존 요원이신가요?"
            ></Button>
          </Link>
          <Button
            kind="fill"
            value="가입하기"
            onClick={() => {
              handleSignup()
                .then(() => {
                  props.setIsOpen(true);
                })
                .catch((e) => {
                  setErrorMessage(e);
                });
            }}
          ></Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default SignupModule;
