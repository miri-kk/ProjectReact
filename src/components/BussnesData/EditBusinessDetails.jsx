// import {Button, TextField } from "@mui/material"
// import React, { useState, useEffect } from 'react';
// import { observer } from "mobx-react";
// import AdminEdit from "../../store/AdminEdit.js";
// import SaveChanges from "./SaveChanges‏.jsx";

// const EditBusinessDetails =(observer(()=>{
//     const [Bname, setBname] = useState(AdminEdit.name??"קליקה מודיעין עילית");
//     const [Baddress, setBaddress] = useState(AdminEdit.address??"אבני נזר 36");
//     const [Bphone, setBphone] = useState(AdminEdit.phone??"08-6668342");
//     const [Bemail, setBemail] = useState(AdminEdit.email??'klika@modil.org.il');

// return (
// <>
// <h2>עריכת פרטים</h2>

// <TextField
// id="outlined-basic"
// label="שם העסק"
// type="text"
// value={Bname}
// variant="outlined"
// color="secondary"
// onChange={(e) => setBname(e.target.value)}
// />
// <br/>
// <br/>
// <TextField
//     id="outlined-basic"
//     label="כתובת"
//     type="text"
//     value={Baddress}
//     variant="outlined"
//     color="secondary"
//     onChange={(e) => setBaddress(e.target.value)}
// />
// <br/>
// <br/>
// <TextField
//       id="outlined-basic"
//       label="טלפון"
//       type="text"
//       value={Bphone}
//       variant="outlined"
//       color="secondary"
//       onChange={(e) => setBphone(e.target.value)}
// />
// <br/>
// <br/>
// <TextField
//       id="outlined-basic"
//       label="מייל"
//       type="email"
//       value={Bemail}
//       variant="outlined"
//       color="secondary"
//       onChange={(e) => setBemail(e.target.value)}
// />
// <br/>
// <br/>
// <Button
//     variant="contained"
//     color="secondary"
//     onClick={()=> SaveChanges(Bname, Baddress, Bphone, Bemail)}>
//     עדכן
// </Button>
// </>
// )}
// )
// )
// export default EditBusinessDetails

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import NewForm from './newForm';

export default function EditBusinessDetails({setOpen}) {

    const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={true}
        onClose={handleClose}
      >
        <DialogTitle>
            <NewForm/>
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
