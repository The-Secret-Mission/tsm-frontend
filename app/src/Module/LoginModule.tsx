import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import { PATH_LOGIN } from '../env';
import './CSS/LoginModule.css';

type LoginModuleProps = {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginModule(props: LoginModuleProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 370; //Math.max(300, windowWidth * 0.5);
  const newW = (windowWidth - contentWidth) / 2;
  const newH = (windowHeight - contentHeight) / 2;
  const navigate = useNavigate();
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
    paddingTop: newH * 0.9 + 'px',
    paddingLeft: newW + 'px',
    paddingBottom: newH * 1.1 + 'px',
    paddingRight: newW + 'px',
    zIndex: 2,
    transition: '500ms',
    opacity: 1,
  };
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div
      className="empty_block"
      style={style}
      onClick={(e) => {
        const divInfo = e.target as Element;
        if (divInfo.className == 'empty_block') {
          props.setter(false);
        }
      }}
    >
      <Stack gap={3} className="login_stack">
        <h3 className="welcome_message" id="welcome_message_header">
          ???????????????{' '}
        </h3>
        <p className="welcome_message" id="welcome_message_body">
          ??????????????? ???????????? ?????????{' '}
        </p>
        <InputBox
          placeholder="???????????? ???????????????"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            setEmail(inputInfo.value);
          }}
        ></InputBox>
        <PasswordBox
          placeholder="??????????????? ???????????????"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            setPassword(inputInfo.value);
          }}
        ></PasswordBox>
        <NoticeLine content={errorMessage}></NoticeLine>
        <Stack direction="horizontal">
          <Button
            kind="none"
            value="????????????"
            onClick={() => {
              if (!email) setErrorMessage('???????????? ??????????????????');
              else if (!password) setErrorMessage('??????????????? ??????????????????');
              else {
                const regex = new RegExp(
                  // eslint-disable-next-line no-useless-escape
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                );
                if (regex.test(email) == false) {
                  setErrorMessage('???????????? ?????? ????????? ???????????????');
                } else {
                  axios
                    .post(PATH_LOGIN, {
                      email,
                      password,
                    })
                    .then(() => {
                      return navigate('/main');
                    })
                    .catch((e) => {
                      setErrorMessage(e.response.data.message);
                    });
                }
              }
            }}
          ></Button>
          <Button
            kind="none"
            value="???????????? ?????????"
            onClick={() => {
              return navigate('/temppwd');
            }}
          ></Button>
        </Stack>

        <Button
          kind="none"
          style={{ width: '50%', marginLeft: '25%' }}
          value="?????? ?????????????"
          onClick={() => {
            return navigate('/signup');
          }}
        ></Button>
      </Stack>{' '}
    </div>
  );
}

export default LoginModule;
