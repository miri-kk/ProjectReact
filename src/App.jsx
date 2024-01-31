import React from 'react';
import './App.css'
import { getBusinessData } from './store/server.js';
import AdminPage from './components/Login/AdminPage.jsx'
// import ButtonAddService from './components/Services/ButtonAddService.jsx';
import ResponsiveAppBar from './components/BussnesData/ResponsiveAppBar.jsx';
import ButtonAddService from './components/Services/ButtonAddService.jsx';
function App() {

  getBusinessData();
  return (
    <>
    <div>
      <ResponsiveAppBar/>
      {/* <AdminPage/> */}
      <ButtonAddService/>

      </div>
    </>  
  )
}

export default App