import React from 'react';
import { Stack } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import NoticeLine from '../Component/NoticeLine';
import './TempPassword.css';

function TempPassword() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  if (isDesktopOrLaptop && isLandscape) {
    return <div>hello Laptop - LD</div>;
  } else if (isDesktopOrLaptop && isPortrait) {
    return <div>hello Laptop - PT</div>;
  } else if (isTabletOrMobile && isLandscape) {
    return <div>hello Mobile - LD</div>;
  } else if (isTabletOrMobile && isPortrait) {
    return (
      <div>
        <img id="main_logo" src={`${process.env.PUBLIC_URL}/logo.png`}></img>
        <Stack gap={3} className="temppassword_stack">
          <h3>가입한 이메일을 입력해주세요</h3>
          <InputBox placeholder=""></InputBox>
          <NoticeLine content="알림이 표시됩니다"></NoticeLine>
          <Button
            type="fill"
            style={{ position: 'relative', left: '20%', width: '60%' }}
            value="임시 패스워드 보내기"
          ></Button>
        </Stack>
      </div>
    );
  }
  return <div>What are you?</div>;
}

export default TempPassword;
