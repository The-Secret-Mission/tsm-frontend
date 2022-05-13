import React from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
{
  /* <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/temppwd" element={<TempPassword />}></Route>
          <Route path="test" element={<Test />}></Route>
          <Route path="/main" element={<MainGate />}></Route>
          <Route path="/me" element={<MyInfo />}></Route>
          <Route path="/new_agency" element={<CreateAgency />}></Route> */
}
function Test() {
  return (
    <div>
      <Stack style={{ padding: '2rem' }} gap={3}>
        <Link to="/temp">
          {' '}
          <Button kind="fill" value="로그인"></Button>{' '}
        </Link>
        <Link to="/signup">
          <Button kind="fill" value="회원가입"></Button>
        </Link>
        <Link to="/temppwd">
          <Button kind="fill" value="임시비밀번호발급"></Button>
        </Link>
        <Link to="/main">
          <Button kind="fill" value="게이트페이지"></Button>
        </Link>
        <Link to="/me">
          <Button kind="fill" value="내정보관리"></Button>
        </Link>
        <Link to="/new_agency">
          <Button kind="fill" value="새조직창설"></Button>
        </Link>
      </Stack>
    </div>
  );
}

export default Test;
