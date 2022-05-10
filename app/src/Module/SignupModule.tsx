import React from 'react';
import { Stack } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import './SignupModule.css';

type SignupModuleProps = {
  //   setter: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginModule(props: SignupModuleProps) {
  console.log(props);
  return (
    <div
      className="empty_block"
      onClick={(e) => {
        const temp: any = e.target;
        if (temp.className == 'empty_block') {
          console.log(temp);
          //   props.setter(false);
        }
      }}
    >
      <Stack gap={3} className="login_whole">
        <h3 className="welcome_message" id="welcome_message_header">
          환영합니다{' '}
        </h3>
        <p className="welcome_message" id="welcome_message_body">
          우리의 새로운 요원으로 참여하세요{' '}
        </p>
        <InputBox placeholder="email을 입력하세요"></InputBox>
        <InputBox placeholder="password을 입력하세요"></InputBox>
        <InputBox placeholder="password을 입력하세요"></InputBox>
        <Button
          style={{ position: 'relative', left: '25%' }}
          value="가입하기"
        ></Button>
        {/* <Stack direction="horizontal">
          <Link style={{ width: '60%' }} to="/">
            <Button
              style={{ width: '100%' }}
              value="기존 요원이신가요?"
            ></Button>
          </Link>
          <Button value="가입하기"></Button>
        </Stack> */}
      </Stack>
    </div>
  );
}

export default LoginModule;
