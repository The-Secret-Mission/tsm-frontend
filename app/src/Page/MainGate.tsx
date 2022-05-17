import React, { CSSProperties, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AcceptedList from '../Component/AcceptedList';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import InvitedList from '../Component/InvitedList';
import MenuBar from '../Component/Menubar';
import Modal from '../Component/Modal';
import NoticeLine from '../Component/NoticeLine';
import { AcceptedListInfo } from '../Type/AcceptedList';
import { InvitedListInfo } from '../Type/InvitedListInfo';
import './CSS/MainGate.css';

const h = window.innerWidth * 0.2;
const style: CSSProperties = {
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: h,
};

function MainGate() {
  const invitedList: InvitedListInfo[] = [
    {
      groupid: '10',
      name: 'cocoa스파이더맨 노웨이 홈 테스트',
      invitor: 'jikwon1011@gamil.com',
      codename: 'jikwon',
    },
  ];
  const accetedList: AcceptedListInfo[] = [
    {
      groupid: '10',
      name: '스파이더맨노웨이홈',
      codename: 'jikwon',
      due: '2022-05-10',
      budget: '20000',
    },
  ];
  const navigate = useNavigate();
  const [isEntermodalOpen, setEnterModalOpen] = useState(false);
  const [selected, setSeleted] = useState(-1);
  function handleClose() {
    setEnterModalOpen(false);
    setSeleted(-1);
  }
  return (
    <div className="page">
      {isEntermodalOpen && selected !== -1 ? (
        <Modal handleClose={handleClose} hiddenButton={true}>
          <div style={{ height: '80%' }}>
            <p style={{ textAlign: 'center' }}>
              {invitedList[selected].invitor + ' 이'}
            </p>
            <p style={{ textAlign: 'center' }}>
              {invitedList[selected].name + '에 초대하였습니다'}
            </p>
            <p style={{ textAlign: 'center' }}>
              {'기본 코드네임은 ' + invitedList[selected].codename + ' 입니다'}
            </p>
            <NoticeLine content="이후 변경이 불가능합니다"></NoticeLine>
            <InputBox
              style={{ width: '100%' }}
              placeholder="새로운 코드네임을 입력하세요. 최대 10자"
            ></InputBox>
          </div>
          <div>
            <Stack gap={2}>
              <Button
                style={{ marginLeft: '25%' }}
                kind="fill"
                value="변경하기"
              ></Button>
              <Button
                style={{
                  marginLeft: '25%',
                  fontSize: '12px',
                  height: '1%',
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
                kind="none"
                value="그대로 입장하기"
              ></Button>
            </Stack>
          </div>
        </Modal>
      ) : null}
      <div className="main_content" style={style}>
        <p id="fastest_dday">D - 20</p>
        <p id="fastest_agengy">첫번째 두번째 세번째 조직</p>
        <section className="invited">
          <p id="list_title">초대받은 조직</p>
          <div id="heading">
            <InvitedList key={-1} data={['이름', '초대한 사람']}></InvitedList>
          </div>
          <ul className="list_with_scroll">
            {invitedList.map((elem, index) => {
              return (
                <InvitedList
                  key={index}
                  data={[elem.name, elem.invitor]}
                  onClick={(e) => {
                    setSeleted(index);
                    setEnterModalOpen(true);
                  }}
                ></InvitedList>
              );
            })}
          </ul>
        </section>
        <section className="accepted">
          <p id="list_title">내 조직</p>
          <div id="heading">
            <AcceptedList
              data={{
                name: '이름',
                due: '날짜',
                budget: '예산액',
                groupid: '',
                codename: '',
              }}
            ></AcceptedList>
          </div>
          <ul className="list_with_scroll">
            {accetedList.map((elem, index) => {
              return <AcceptedList key={index} data={elem}></AcceptedList>;
            })}
          </ul>
        </section>
        <Button
          kind="fill"
          style={{ position: 'relative', left: '50%' }}
          value="새조직 창설하기"
          onClick={() => {
            return navigate('/new_agency');
          }}
        ></Button>
      </div>

      <MenuBar></MenuBar>
    </div>
  );
}

export default MainGate;
