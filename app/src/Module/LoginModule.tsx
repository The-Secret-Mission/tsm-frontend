import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import './CSS/LoginModule.css';

function handleLogin() {
  // return Promise.reject('비밀번호 틀렸어요');
  return Promise.resolve();
}

type LoginModuleProps = {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginModule(props: LoginModuleProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 370; //Math.max(300, windowWidth * 0.5);
  const newW = (windowWidth - contentWidth) / 2;
  const newH = (windowHeight - contentHeight) / 2;
  const navigate = useNavigate();
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
  return (
    <div
      className="empty_block"
      style={style}
      onClick={(e) => {
        const divInfo = e.target as Element;
        console.log(divInfo.className);
        if (divInfo.className == 'empty_block') {
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
        <NoticeLine content={noticeMessage}></NoticeLine>
        <Stack direction="horizontal">
          <Button
            kind="none"
            value="접속하기"
            onClick={() => {
              return navigate('/main');
            }}
          ></Button>
          <Link style={{ width: '60%' }} to="/temppwd">
            <Button
              kind="none"
              style={{ width: '90%' }}
              value="비밀번호 재설정"
            ></Button>
          </Link>
        </Stack>

        <Button
          kind="none"
          style={{ width: '50%', marginLeft: '25%' }}
          value="처음 이신가요?"
          onClick={() => {
            return navigate('/signup');
          }}
        ></Button>
      </Stack>{' '}
    </div>
  );
}

export default LoginModule;
