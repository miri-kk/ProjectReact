import AdminEdit from "../../store/AdminEdit"
import React, { useState } from 'react';
import { observer } from "mobx-react"
import { Button } from "@mui/material";
import { EditDetails } from "./EditDetails";
// import {handleClickOpen} from "./FormEditBusinessData";
// import FormEditBusinessData from "./FormEditBusinessData";


const BusinessDetails = (observer(() => {
    const [isActive, setIsActive] = useState(false);

  //   const handleClick = () => {
  //   setIsActive(true);
  // };
        

  return (
      <>
   <h2>פרטי העסק</h2>
        <h2></h2>{AdminEdit.name}
        <h3></h3>{AdminEdit.address}
        <h3></h3>{AdminEdit.phone}
        <h3></h3>{AdminEdit.email}

        <br/>
        <br/>

        {isActive ? <p>Activated!</p> : null}

        <Button
        variant="contained"
        color="secondary"
        onClick={()=>EditDetails(true)}>
        עריכה
        </Button>
      </>
  )
}));
export default BusinessDetails;