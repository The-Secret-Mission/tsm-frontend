import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import MenuBar from '../Component/Menubar';
import Modal from '../Component/Modal';
import PasswordRecheckModule from '../Module/PasswordRecheckModule';
import UpdateMyInfoModule from '../Module/UpdateMyInfoModule';

import './CSS/MyInfo.css';

function MyInfo() {
  const [pass, setPass] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 250; //Math.max(300, windowHeight * 0.5);
  const newW = (windowWidth - contentWidth) / 2;
  const newH = (windowHeight - contentHeight) / 2;
  const menuberH = windowWidth * 0.1;
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      });
    };
  }, []);
  const style: CSSProperties = {
    position: 'relative',
    paddingTop: newH - menuberH + 'px',
    paddingLeft: newW + 'px',
    paddingBottom: newH + menuberH + 'px',
    paddingRight: newW + 'px',
    transition: '500ms',
  };
  const [okModalIsOpen, setOkIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertIsOpen] = useState(false);
  function handleOkModalClose() {
    setOkIsOpen(false);
  }
  function handleAlertModalClose() {
    setAlertIsOpen(false);
  }
  if (!pass)
    return (
      <div className="page">
        <PasswordRecheckModule
          style={style}
          setPass={setPass}
        ></PasswordRecheckModule>
        <MenuBar></MenuBar>
      </div>
    );
  else
    return (
      <div className="page">
        {okModalIsOpen ? (
          <Modal handleClose={handleOkModalClose}>
            <p style={{ textAlign: 'center', height: '70%' }}>
              ???????????? ????????? ?????????????????????
            </p>
          </Modal>
        ) : null}
        {alertModalIsOpen ? (
          <Modal handleClose={handleAlertModalClose} hiddenButton={true}>
            <div style={{ height: '70%' }}>
              <h2>?????? ?????????????????????????</h2>
              <p>??? ????????? ????????? ??? ????????????</p>
            </div>
            <Stack direction="horizontal" gap={2}>
              <Button
                kind="fill"
                value="????????????"
                onClick={() => {
                  handleAlertModalClose();
                }}
              ></Button>
              <Button kind="fill" value="????????????"></Button>
            </Stack>
          </Modal>
        ) : null}
        <UpdateMyInfoModule
          setOkIsOpen={setOkIsOpen}
          setAlertIsOpen={setAlertIsOpen}
          style={style}
        ></UpdateMyInfoModule>
        <MenuBar></MenuBar>
      </div>
    );
}

export default MyInfo;
