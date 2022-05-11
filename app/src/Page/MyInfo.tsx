import React, { useState } from 'react';
import MenuBar from '../Component/Menubar';
import PasswordRecheckModule from '../Module/PasswordRecheckModule';
import UpdateMyInfoModule from '../Module/UpdateMyInfoModule';

import './MyInfo.css';

function MyInfo() {
  const [pass, setPass] = useState(false);

  if (!pass)
    return (
      <div className="page1">
        <PasswordRecheckModule setPass={setPass}></PasswordRecheckModule>
        <MenuBar></MenuBar>
      </div>
    );
  else
    return (
      <div className="page1">
        <UpdateMyInfoModule></UpdateMyInfoModule>
        <MenuBar></MenuBar>
      </div>
    );
}

export default MyInfo;
