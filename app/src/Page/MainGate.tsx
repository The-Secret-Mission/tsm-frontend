import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AcceptedList from '../Component/AcceptedList';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import InvitedList from '../Component/InvitedList';
import MenuBar from '../Component/Menubar';
import Modal from '../Component/Modal';
import NoticeLine from '../Component/NoticeLine';
import { PATH_USER } from '../env';
import InfinityIcon from '../Icons/InfinityIcon';
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
  const navigate = useNavigate();
  const [acceptedList, setAcceptedList] = useState<AcceptedListInfo[]>([]);
  const [invitedList, setInvitedList] = useState<InvitedListInfo[]>([]);
  const [isEntermodalOpen, setEnterModalOpen] = useState(false);
  const [selected, setSeleted] = useState(-1);
  const [dday, setDday] = useState(-1);
  const [agency, setAgency] = useState('');
  function handleClose() {
    setEnterModalOpen(false);
    setSeleted(-1);
  }
  useEffect(() => {
    axios
      .get(PATH_USER('userid'))
      .then((response) => {
        const invited = response.data.invited;
        const accepted = response.data.entered;
        const newInvitedList: InvitedListInfo[] = [];
        invited.map((elem: any) => {
          newInvitedList.push({
            groupid: elem.groupid,
            name: elem.name,
            invitor: elem.invitor,
            codename: elem.codename,
          });
        });
        setInvitedList(newInvitedList);
        const newAcceptedList: AcceptedListInfo[] = [];
        accepted.map((elem: any) => {
          newAcceptedList.push({
            groupid: elem.groupid,
            name: elem.name,
            due: elem.due,
            budget: elem.budget,
            codename: elem.codename,
          });
        });
        setAcceptedList(newAcceptedList);
        if (newAcceptedList.length) {
          setAgency(newAcceptedList[0].name);
          setDday(0);
        } else if (newInvitedList.length) {
          setAgency(newInvitedList[0].name);
          setDday(-1);
        } else {
          setAgency('');
          setDday(-1);
        }
      })
      .catch((e) => {
        if (e.response.status == 401) return navigate('/');
      });
  }, []);
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
        {dday == -1 ? (
          <InfinityIcon />
        ) : (
          <p id="fastest_dday">{'D - ' + dday}</p>
        )}
        <p id="fastest_agengy">
          {dday != -1 && agency
            ? agency
            : agency
            ? '초대에 응하세요'
            : '새 조직을 직접 만들어보세요'}
          {/* {dday != -1 ? agency : '초대에 응하거나 새 조직을 직접 만들어 보세요'} */}
        </p>
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
            {acceptedList.map((elem, index) => {
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
