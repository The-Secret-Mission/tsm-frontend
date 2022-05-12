import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AcceptedList from '../Component/AcceptedList';
import Button from '../Component/Button';
import InvitedList from '../Component/InvitedList';
import MenuBar from '../Component/Menubar';
import './MainGate.css';

function MainGate() {
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
        <div className="main_content">
          <p id="fastest_dday">D - 20</p>
          <p id="fastest_agengy">첫번째 두번째 세번째 조직</p>
          <section className="invited">
            <p id="list_title">초대받은 조직</p>
            <div id="heading">
              <InvitedList data={['이름', '초대한 사람']}></InvitedList>
            </div>
            <ul className="list_with_scroll">
              <InvitedList data={['첫번째', '두번째']}></InvitedList>
              <InvitedList data={['첫번째', '두번째']}></InvitedList>
              <InvitedList data={['첫번째', '두번째']}></InvitedList>
              <InvitedList data={['첫번째', '두번째']}></InvitedList>
            </ul>
          </section>
          <section className="page">
            <p id="list_title">내 조직</p>
            <div id="heading">
              <AcceptedList data={['이름', '날짜', '예산액']}></AcceptedList>
            </div>
            <ul className="list_with_scroll">
              <AcceptedList
                data={['첫번째 이름', '두번째날짜', '세번째 예산액']}
              ></AcceptedList>
              <AcceptedList
                data={['첫번째 이름', '두번째날짜', '세번째 예산액']}
              ></AcceptedList>
              <AcceptedList
                data={['첫번째 이름', '두번째날짜', '세번째 예산액']}
              ></AcceptedList>
              <AcceptedList
                data={['첫번째 이름', '두번째날짜', '세번째 예산액']}
              ></AcceptedList>
              <AcceptedList
                data={['첫번째 이름', '두번째날짜', '세번째 예산액']}
              ></AcceptedList>
            </ul>
          </section>
          <Button
            type="fill"
            style={{ position: 'relative', left: '50%' }}
            value="새조직 창설하기"
          ></Button>
        </div>

        <MenuBar></MenuBar>
      </div>
    );
  }
  return <div>What are you?</div>;
}

export default MainGate;
