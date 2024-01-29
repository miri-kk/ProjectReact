import React from 'react';
import './App.css'
import { setBusinessData, getBusinessData } from './store/server.js';
import AdminPage from './components/Login/AdminPage.jsx'
import UserHome from "./components/User/UserHome.jsx"
function App() {

  getBusinessData();
  return (
    <>
    <div>
      <UserHome/>
      <AdminPage/>
      </div>
    </>  
  )
}

export default App