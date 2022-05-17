import React, { CSSProperties, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from '../Component/Menubar';
import NoticeLine from '../Component/NoticeLine';
import ConfidentialDocumentSticker from '../Icons/ConfidentialDocumentSticker';
import './CSS/AgencyAfterModule.css';

const h = window.innerWidth * 0.2;
const style: CSSProperties = {
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
  // paddingBottom: h,
  // height: window.innerHeight,
};

function AgencyAfterModule() {
  const params = useParams();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    params.groupid == '1' ? setAdmin(true) : setAdmin(false);
  }, []);

  return (
    <div className="page">
      <div className="agency_after_main_content" style={style}>
        <section className="agency_after_info"></section>
        <p id="name_agency">임시 조직이름</p>
        <p id="agency_after_info_notice">뭔가 써야할거 같은데 뭘쓰지</p>
        <section className="agency_after_others" style={{ height: '50%' }}>
          <ConfidentialDocumentSticker></ConfidentialDocumentSticker>
          {admin ? (
            <input
              type="button"
              id="agree_button"
              value="미션 공개 승인"
              style={{ backgroundColor: '#A90D0D' }}
            ></input>
          ) : (
            <input
              type="button"
              id="not_button"
              value="미션 공개 대기중"
            ></input>
          )}
          <NoticeLine
            style={{ textAlign: 'center' }}
            content="2주뒤 이 조직은 자동으로 해체됩니다"
          ></NoticeLine>
        </section>
      </div>
      <MenuBar />
    </div>
  );
}
export default AgencyAfterModule;
