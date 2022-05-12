import React from 'react';
import { Stack } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import MainLogo from '../Component/MainLogo';
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
      <div className="page">
        <MainLogo type="blur"></MainLogo>
        <Stack gap={3} className="temppassword_stack">
          <p id="notice_temppwd">가입한 이메일을 입력해주세요</p>
          <InputBox placeholder="이메일을 입력하세요"></InputBox>
          <NoticeLine content="알림이 표시됩니다"></NoticeLine>
          <Button
            kind="fill"
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
