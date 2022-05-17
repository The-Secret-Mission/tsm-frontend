import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import MainLogo from '../Component/MainLogo';
import NoticeLine from '../Component/NoticeLine';
import './CSS/TempPassword.css';

function TempPassword() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 250; //Math.max(250, windowWidth * 0.5);
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
    paddingTop: newH + 'px',
    paddingLeft: newW + 'px',
    paddingBottom: newH + 'px',
    paddingRight: newW + 'px',
    zIndex: 2,
    transition: '500ms',
  };
  return (
    <div className="page">
      <MainLogo type="blur"></MainLogo>
      <Stack style={style} gap={3} className="temppassword_stack">
        <p id="notice_temppwd">가입한 이메일을 입력해주세요</p>
        <InputBox placeholder="이메일을 입력하세요"></InputBox>
        <NoticeLine content="알림이 표시됩니다"></NoticeLine>
        <Stack direction="horizontal" gap={3}>
          <Button
            kind="none"
            style={{ width: '40%' }}
            value="뒤로가기"
          ></Button>
          <Button
            kind="fill"
            style={{ width: '60%' }}
            value="임시 패스워드 보내기"
          ></Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default TempPassword;
