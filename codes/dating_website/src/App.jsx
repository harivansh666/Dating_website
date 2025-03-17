import React, { useContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainHome from './components/MainHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';
import SignIn from './Pages/SignIn';
// import CreateAcc from './Pages/CreateAcc';
import Nearby from './components/Nearby';
import CreateAcc from './Pages/CreateAcc';
import AicontextProvider from './context/Main.context';

function App() {

  // const handleAiDate = (e) => {
  //   console.log(e.target.value)
  //   setAiRender(true);  // Trigger the rendering of the AI content
  // };

  return (
    <AicontextProvider>
      <BrowserRouter>
        <Routes >
          <Route path={'/'} element={<SignIn />} />   {/* Pass aiRender state to MainHome */}
          <Route path={'/home'} element={<MainHome />} />
          {/* Pass aiRender state to MainHome */}
          <Route path={'/search'} element={<SearchPage />} />
          {/* <Route path={'/createAcc'} element={<CreateAcc/>} /> */}
          <Route path={'/Nearby'} element={<Nearby />} />
          <Route path={'/createAcc'} element={<CreateAcc />} />
        </Routes>
      </BrowserRouter>

    </AicontextProvider>

  );
}

export default App;
