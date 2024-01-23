import React from "react"
import AdminEdit from "./AdminEdit"
import { observer } from "mobx-react"
import Button from '@mui/material/Button';
import { EditDetails } from "./EditDetails";

const BusinessDetails = (observer(() => {

  return (
      <>
        <h2>פרטי העסק</h2>
        <h2></h2>{AdminEdit.name}
        <h3></h3>{AdminEdit.address}
        <h3></h3>{AdminEdit.phone}
        <h3></h3>{AdminEdit.email}

        <br/>
        <br/>

        <Button
        variant="contained"
        color="secondary"
        onClick={()=>EditDetails(true)}>
        עריכה
        </Button>
      </>
  )
}))
export default BusinessDetails