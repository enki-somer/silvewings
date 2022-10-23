import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dining from './components/Dining/Dining';
import WhoWeAre from './components/Who/WhoWeAre';
import Meet from './components/Meet/Meet';
import SharedLayOut from './components/SharedLayOut';
import Serv from './components/OurServ/Serv';
import Cont from './components/Contact/Cont';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<SharedLayOut />} >
            <Route index element={<Home />} />
            <Route path='whoweare' element={<WhoWeAre />} />
            <Route path='ourmanagment' element={<Dining />} />
            <Route path='mission&visiion' element={<Meet />} />
            <Route path='ourservices' element={<Serv />} />
            <Route path='contact' element={<Cont />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
