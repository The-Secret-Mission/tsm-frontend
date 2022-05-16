import React, { useState } from 'react';
// import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import './CSS/PasswordRecheckModule.css';

type PasswordRecheckModuleProps = {
  setPass: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
};

function PasswordRecheckModule(props: PasswordRecheckModuleProps) {
  const [notice, setNotice] = useState(' ');
  return (
    <div className="password_recheck" style={props.style}>
      <section id="content">
        <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          jikwon@gmail.com
        </p>
        <p style={{ textAlign: 'right' }}>로 접속하셨습니다</p>
      </section>
      <PasswordBox
        style={{ width: '100%', marginBottom: '20px' }}
        placeholder="패스워드를 입력해주세요"
      ></PasswordBox>
      <NoticeLine content={notice}></NoticeLine>
      <Link to="/main">
        <Button
          style={{ width: '48%', margin: '1%' }}
          kind="none"
          value="뒤로가기"
        ></Button>
      </Link>
      <Button
        onClick={(e) => {
          e.preventDefault();
          props.setPass(true);
        }}
        style={{ width: '48%', margin: '1%' }}
        kind="fill"
        value="확인"
      ></Button>
    </div>
  );
}

export default PasswordRecheckModule;
