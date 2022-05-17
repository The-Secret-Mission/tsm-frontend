import React, { CSSProperties, useEffect, useState } from 'react';
import Modal from '../Component/Modal';
import BasicInfoModule from '../Module/BasicInfoModule';
import InvitedInfoModule from '../Module/InvitedInfoModule';
import OptionalInfoModule from '../Module/OptionalInfoModule';
import './CSS/CreateAgency.css';

function CreateAgency() {
  const [page, setPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 500; //Math.max(500, windowHeight * 0.8);
  const newW = (windowWidth - contentWidth) / 2;
  const newH = (windowHeight - contentHeight) / 2;

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
    paddingTop: newH + 'px',
    paddingLeft: newW + 'px',
    paddingBottom: newH + 'px',
    paddingRight: newW + 'px',
    transition: '500ms',
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }
  if (page == 0)
    return <BasicInfoModule setter={setPage} style={style}></BasicInfoModule>;
  else if (page == 1)
    return (
      <InvitedInfoModule setter={setPage} style={style}></InvitedInfoModule>
    );

  return (
    <div>
      {modalIsOpen ? <Modal handleClose={handleClose}></Modal> : null}
      <OptionalInfoModule
        handleOpen={handleOpen}
        setter={setPage}
        style={style}
      ></OptionalInfoModule>
    </div>
  );
}

export default CreateAgency;
