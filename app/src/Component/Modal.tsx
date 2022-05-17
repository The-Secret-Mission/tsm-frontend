import React from 'react';
import XButton from '../Icons/XIcon';
import Button from './Button';
import './CSS/Modal.css';

type ModalProps = {
  handleClose: () => void;
  children?: React.ReactNode;
  hiddenButton?: boolean;
};
function Modal(props: ModalProps) {
  return (
    <div
      className="my_modal"
      onClick={(e) => {
        const divInfo = e.target as Element;
        if (divInfo.className == 'my_modal') props.handleClose();
      }}
    >
      <div className="my_modal_shape">
        <div className="my_modal_header">
          <XButton
            onClick={() => {
              props.handleClose();
            }}
          ></XButton>
        </div>
        <div className="my_modal_content">
          {props.children}
          {!props.hiddenButton ? (
            <Button
              style={{ marginLeft: '25%' }}
              kind="fill"
              value="확인"
              onClick={() => {
                props.handleClose();
              }}
            ></Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Modal;
