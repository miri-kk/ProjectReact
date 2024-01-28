import React from 'react';
import './App.css'
import { setBusinessData, getBusinessData } from './store/server.js';
import AdminPage from './components/Login/AdminPage.jsx'
function App() {

  getBusinessData();
  return (
    <>
      <AdminPage/>
    </>  
  )
}

export default App