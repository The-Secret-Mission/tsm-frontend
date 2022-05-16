import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import NoticeLine from '../Component/NoticeLine';
import NotyetTag from '../Component/NotyetTag';
import SignedupTag from '../Component/SigneupTag';
import './AgencyAdmin.css';

const h = window.innerWidth * 0.2;
const style: CSSProperties = {
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: h,
};

function AgencyAdmin() {
  const [viewMode, setViewmode] = useState(true);
  const [message, setMessage] = useState('메세지 입니다 안녕');
  const [budget, setBudget] = useState(0);
  const members = [
    { email: 'jikwon@gmail.com', status: true },
    { email: 'testmail@gmail.com', status: false },
    { email: 'marvel_movi2@naver.com', status: true },
    { email: 'catdog_whatever@gmail.com', status: false },
  ];

  useEffect(() => {
    if (!viewMode) {
      const element: any = document.getElementById('manage_message_edit');
      if (element) {
        element.focus();
        element.selectionStart = message.length;
      }
    }
  }, [viewMode]);

  return (
    <div className="page">
      <div className="manage_main_content" style={style}>
        <p id="name_agency">임시 조직이름</p>
        <section className="manage_agent">
          <ul className="manage_list_with_scroll">
            {members.map((element, index) => {
              if (element.status == true)
                return (
                  <li key={index} className="manage_list_element">
                    {element.email + ' '}
                    <SignedupTag />
                  </li>
                );
              return (
                <li key={index} className="manage_list_element">
                  {element.email + ' '}
                  <NotyetTag />
                </li>
              );
            })}
          </ul>
        </section>
        <section className="manage_message">
          <NoticeLine
            style={{ marginBottom: '0' }}
            content={`${message.length}/200`}
          ></NoticeLine>
          <textarea
            disabled={viewMode}
            value={message}
            onChange={(e: any) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </section>
        <Stack
          className="manage_budget"
          direction="horizontal"
          gap={3}
          style={{ paddingLeft: '5px' }}
        >
          <img
            width="24"
            height="24"
            src={`${process.env.PUBLIC_URL}/money.svg`}
          ></img>
          <input
            disabled={viewMode}
            value={'₩' + budget}
            onChange={(e) => {
              try {
                let stringvalue = e.target.value.substring(1);
                if (stringvalue.length == 0) stringvalue = '0';
                const intvalue = parseInt(stringvalue);
                if (isNaN(intvalue)) return;
                setBudget(intvalue);
              } catch (e) {
                console.log("error : That's not a number");
              }
            }}
          ></input>
          <Button
            kind="fill"
            value={viewMode ? '수정' : '변경 내용 저장'}
            onClick={
              viewMode
                ? () => {
                    setViewmode(false);
                  }
                : () => {
                    setViewmode(true);
                  }
            }
          ></Button>
        </Stack>
        <section className="manage_danger">
          <p id="manage_danger_name">Dangerous Zone</p>
          <p id="manage_danger_notice">🚨 아래의 선택은 되돌릴 수 없습니다</p>
          <Stack direction="horizontal" gap={3}>
            <p id="manage_dagner_kind">조직을 영구적으로 해체하기</p>
            <Button
              style={{
                width: '40%',
                backgroundColor: '#A90D0D',
              }}
              kind="fill"
              value="삭제하기"
            ></Button>
          </Stack>
        </section>
      </div>
    </div>
  );
}

export default AgencyAdmin;
