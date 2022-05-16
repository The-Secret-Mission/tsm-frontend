import React from 'react';
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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
