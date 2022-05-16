import React from 'react';
import { Link } from 'react-router-dom';
import AboutSvg from '../Icons/AboutIcon';
import LogoSvg from '../Icons/LogoIcon';
import LogoutSvg from '../Icons/LogoutIcon';
import MyInfoSvg from '../Icons/MyInfoIcon';
import QuestionSvg from '../Icons/QuestionIcon';
import './CSS/Menubar.css';

function MenuBar() {
  return (
    <div className="menubar">
      <div className="menu">
        <Link to="/me">
          <MyInfoSvg></MyInfoSvg>
        </Link>
        <p>내 정보</p>
      </div>
      <div className="menu">
        <Link to="/test">
          {' '}
          <AboutSvg></AboutSvg>
        </Link>

        <p>이용방법</p>
      </div>
      <div className="menu">
        <Link to="/">
          <LogoSvg></LogoSvg>
        </Link>

        <p>TheSecretMission</p>
      </div>
      <div className="menu">
        <Link to="/test">
          <QuestionSvg></QuestionSvg>
        </Link>

        <p>문의하기</p>
      </div>
      <div className="menu">
        <Link to="/test">
          {' '}
          <LogoutSvg></LogoutSvg>
        </Link>

        <p>로그아웃</p>
      </div>
    </div>
  );
}

export default MenuBar;
