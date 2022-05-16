import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from '../Component/Button';
import MenuBar from '../Component/Menubar';
import ClosedLetter from '../Icons/ClosedLetter';
import './CSS/AgencyBeforeModule.css';
const h = window.innerWidth * 0.2;
const style: CSSProperties = {
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: h,
};

function AgencyBeforeModule() {
  const params = useParams();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    params.groupid == '3' ? setAdmin(true) : setAdmin(false);
  }, []);
  return (
    <div className="page">
      <div className="main_content" style={style}>
        <p id="name_agency">임시 조직이름</p>
        <p id="name_agency_end">에서 미션이 내려왔습니다</p>
        {!admin ? null : (
          <Button
            kind="fill"
            style={{ position: 'relative', left: '30%', width: '40%' }}
            value="내 조직 관리하기"
          ></Button>
        )}
        <section className="about_agencys">
          <Stack direction="horizontal" gap={3}>
            <div className="due_date" style={{ width: '60%' }}>
              <img
                width="24"
                height="24"
                src={`${process.env.PUBLIC_URL}/calander.svg`}
              ></img>
              <p id="due_date">2020.05.19 (D- 30)</p>
            </div>
            <div className="limit">
              <img
                width="24"
                height="24"
                src={`${process.env.PUBLIC_URL}/money.svg`}
              ></img>
              <p id="limit">₩50,000</p>
            </div>
          </Stack>
          <div className="agency_message">
            <p>요원님 메시지가 있습니다</p>
            <p>
              블라블라블랄브ㅡㄹ능라너알너아러낭ㄹ 메시지가 있어요 반즈가 지프를
              훔쳤어요 200자를 채워봅시다 스크롤 됩니다
              하하ㅏ하ㅏㅏㅇ너이마저ㅐ야ㅓㅁㄴ어ㅣㅣㅏ멍ㅁ나ㅣ어마어ㅇ 팝콘
              ㅁ밋있다. 요거트스무디도 맛있다 어차피 엔터는 어떻게 하는거지
              ㅁ;낭ㄴㅇ미ㅏㅓㅇㅁ;ㄴ암;ㅣ암;ㅣ아;미ㅏㅇ;미ㅏㅇ 곱창도 먹고
              고기고 먹고 순대도 먹고
            </p>
          </div>
        </section>
        <ClosedLetter></ClosedLetter>
      </div>

      <MenuBar></MenuBar>
    </div>
  );
}

export default AgencyBeforeModule;
