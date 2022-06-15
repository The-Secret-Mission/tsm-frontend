import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Page/NotFound';
import Home from './Page/Home';
import Signup from './Page/Signup';
import TempPassword from './Page/TempPassword';
import Test from './Page/Test';
import MyInfo from './Page/MyInfo';
import MainGate from './Page/MainGate';
import CreateAgency from './Page/CreateAgency';
import Agency from './Page/Agency';
import AgencyAdmin from './Page/AgencyAdmin';
import axios from 'axios';
import { UserContext } from './Context';

axios.defaults.headers.common['email'] = 'jikwon@gmail.com'; // for all requests

function App() {
  const [userid, setUserid] = useState('');
  function handleUserId(value: string) {
    setUserid(value);
    return null;
  }
  return (
    <div className="App">
      <UserContext.Provider value={{ userid, handleUserId }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/temp" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/temppwd" element={<TempPassword />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/main" element={<MainGate />}></Route>
            <Route path="/me" element={<MyInfo />}></Route>
            <Route path="/new_agency" element={<CreateAgency />}></Route>
            <Route path="/agency/:groupid" element={<Agency />}></Route>
            <Route
              path="/agency/admin/:groupid"
              element={<AgencyAdmin />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
