import React, { CSSProperties } from 'react';
import AcceptedList from '../Component/AcceptedList';
import Button from '../Component/Button';
import InvitedList from '../Component/InvitedList';
import MenuBar from '../Component/Menubar';
import './MainGate.css';

const h = window.innerWidth * 0.2;
const style: CSSProperties = {
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: h,
};
function MainGate() {
  return (
    <div className="page">
      <div className="main_content" style={style}>
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
          kind="fill"
          style={{ position: 'relative', left: '50%' }}
          value="새조직 창설하기"
        ></Button>
      </div>

      <MenuBar></MenuBar>
    </div>
  );
}

export default MainGate;
