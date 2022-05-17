import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLogo from '../Component/MainLogo';
import Modal from '../Component/Modal';
import SignupModule from '../Module/SignupModule';
import './CSS/Signup.css';

function Signup() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="page">
      {modalIsOpen ? (
        <Modal
          handleClose={() => {
            setIsOpen(false);
            navigate('/main');
          }}
        >
          <div className="contents_for_modal" style={{ height: '70%' }}>
            <h2>$$ 요원님</h2>
            <p>The Secret Mission의 정식 요원이 되셨습니다</p>
          </div>
        </Modal>
      ) : null}
      <MainLogo type="blur"></MainLogo>
      <SignupModule setIsOpen={setIsOpen}></SignupModule>
    </div>
  );
}

export default Signup;
