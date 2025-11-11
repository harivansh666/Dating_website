import React, { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainHome from "./components/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import SignIn from "./Pages/SignIn";
// import CreateAcc from './Pages/CreateAcc';
import Nearby from "./components/Nearby";
import CreateAcc from "./Pages/CreateAcc";
import AicontextProvider from "./context/Main.context";
import Profile from "./Pages/Profile";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const handleAiDate = (e) => {
  //   console.log(e.target.value)
  //   setAiRender(true);  // Trigger the rendering of the AI content
  // };
   const warmup = async () => {
    const res = await axios.get("https://vibely-5kiw.onrender.com/check");
    console.log(res.data);
  };
  
  useEffect(() => {
    warmup();
  }, []);

  return (
    <AicontextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SignIn />} />{" "}
          {/* Pass aiRender state to MainHome */}
          <Route path={"/home"} element={<MainHome />} />
          {/* Pass aiRender state to MainHome */}
          <Route path={"/search"} element={<SearchPage />} />
          {/* <Route path={'/createAcc'} element={<CreateAcc/>} /> */}
          <Route path={"/Nearby"} element={<Nearby />} />
          <Route path={"/createAcc"} element={<CreateAcc />} />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AicontextProvider>
  );
}

export default App;
