import React from 'react';
import { Button } from "@mui/material";
import { EditDetails } from './EditDetails';
import OpenDialogButton from './OpenDialogButton'
function ButtonEdit() {

  return (
    <>
    {/* <Button
    variant="outlined"
    color="inherit"
    onClick={()=>EditDetails(true)}>
    עריכה
    </Button> */}

    <OpenDialogButton></OpenDialogButton>
    <br></br>
    <br></br>
    </>

  )
}

export default ButtonEdit
