import logo from './logo.svg';
import './App.css';
import React from "react";

// react router DOM을 이용하기 위해
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

import ChatPage from "./components/ChatPage/ChatPage"; //django처럼 .js 없어도 됨
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";


function App() {
  return (
    <Router>
		  <Routes>
			  <Route exact path="/" element={<ChatPage />} />
			  <Route exact path="/login" element={<LoginPage/>} />
			  <Route exact path="/register" element={<RegisterPage/>} />
		  </Routes>
	  </Router>
  );
}

export default App;
