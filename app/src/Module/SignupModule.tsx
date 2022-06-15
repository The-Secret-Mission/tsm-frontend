import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import NoticeLine from '../Component/NoticeLine';
import PasswordBox from '../Component/PasswordBox';
import axios from 'axios';
import './CSS/SignupModule.css';
import { PATH_SIGNUP } from '../env';
import { UserContext } from '../Context';

type SignupModuleProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function handleSignup(email: string, password: string) {
  return axios.post(PATH_SIGNUP, {
    email: email,
    password: password,
  });
}
function SignupModule(props: SignupModuleProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const contentWidth = Math.max(300, windowWidth * 0.8);
  const contentHeight = 370; // Math.min(370, windowWidth * 0.8);
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
    paddingTop: newH * 0.9 + 'px',
    paddingLeft: newW + 'px',
    paddingBottom: newH * 1.1 + 'px',
    paddingRight: newW + 'px',
    zIndex: 2,
    transition: '500ms',
    opacity: 1,
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [isSame, setSame] = useState(false);
  const [errorMessage, setErrorMessage] = useState('알림이 표시됩니다');
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!password.length && !repassword.length) {
      setSame(false);
      setErrorMessage('');
    } else if (password === repassword) {
      setSame(true);
      setErrorMessage('');
    } else {
      setSame(false);
      setErrorMessage('비밀번호가 다릅니다');
    }
  }, [password, repassword]);
  return (
    <div className="empty_block" style={style}>
      <Stack gap={3} className="signup_whole">
        <h3 className="welcome_message" id="welcome_message_header">
          환영합니다{' '}
        </h3>
        <p className="welcome_message" id="welcome_message_body">
          우리의 새로운 요원으로 참여하세요{' '}
        </p>
        <InputBox
          placeholder="email을 입력하세요"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            setEmail(inputInfo.value);
          }}
        ></InputBox>
        <PasswordBox
          placeholder="password을 입력하세요"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            setPassword(inputInfo.value);
          }}
        ></PasswordBox>
        <PasswordBox
          placeholder="password을 다시 한번 입력하세요"
          onChange={(e) => {
            const inputInfo = e.target as HTMLInputElement;
            setRePassword(inputInfo.value);
          }}
        ></PasswordBox>
        <NoticeLine content={errorMessage}></NoticeLine>
        <Stack direction="horizontal" gap={3}>
          <Button
            kind="none"
            style={{ width: '50%' }}
            value="기존 요원이신가요?"
            onClick={() => {
              return navigate('/');
            }}
          ></Button>
          <Button
            disabled={email && isSame ? false : true}
            kind="fill"
            value="가입하기"
            onClick={() => {
              handleSignup(email, password)
                .then((e) => {
                  userContext.handleUserId(e.data.userid);
                  props.setIsOpen(true);
                })
                .catch((e) => {
                  const errorMessage: string = e?.response?.data?.message;
                  if (errorMessage) setErrorMessage(errorMessage);
                  else setErrorMessage('Something went wrong');
                });
            }}
          ></Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default SignupModule;
