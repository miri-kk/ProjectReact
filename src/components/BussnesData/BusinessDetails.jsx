import AdminEdit from "../../store/AdminEdit"
import React, { useState } from 'react';
import { observer } from "mobx-react"
import dataStore from "../../Data/dataStore";

import ButtonEdit from "./ButtonEdit";


const BusinessDetails = (observer(() => {
    const [isActive, setIsActive] = useState(false);

  return (
      <>
        <h4>{AdminEdit.name}</h4>
        <p>{AdminEdit.address}</p>
        <p>{AdminEdit.phone}</p>
        <p>{AdminEdit.email}</p>

        {isActive ? <p>Activated!</p> : null}

      
        <div style={{ marginBottom: '15px' }}></div>
        {!dataStore.isLogin ? "" : <ButtonEdit />}
      </>
  )
}));
export default BusinessDetails;