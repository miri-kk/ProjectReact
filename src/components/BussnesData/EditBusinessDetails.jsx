import {DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog, Button, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import AdminEdit from "../../store/AdminEdit.js";
import SaveChanges from "./SaveChanges‏.jsx";
//import FormEditBusinessData from "./FormEditBusinessData.jsx";
import BusinessDetails from "./BusinessDetails.jsx";


const EditBusinessDetails =(observer(()=>{
    const [Bname, setBname] = useState(AdminEdit.name??"קליקה מודיעין עילית");
    const [Baddress, setBaddress] = useState(AdminEdit.address??"אבני נזר 36");
    const [Bphone, setBphone] = useState(AdminEdit.phone??"08-6668342");
    const [Bemail, setBemail] = useState(AdminEdit.email??'klika@modil.org.il');


return (
<>
<h2>עריכת פרטים</h2>
{/* <ButtonComponent handleClick={FirstComponent.handleClick} />
<BusinessDetails/> */}

<TextField
id="outlined-basic"
label="שם העסק"
type="text"
value={Bname}
variant="outlined"
color="secondary"
onChange={(e) => setBname(e.target.value)}
/>
<br/>
<br/>
<TextField
    id="outlined-basic"
    label="כתובת"
    type="text"
    value={Baddress}
    variant="outlined"
    color="secondary"
    onChange={(e) => setBaddress(e.target.value)}
/>
<br/>
<br/>
<TextField
      id="outlined-basic"
      label="טלפון"
      type="text"
      value={Bphone}
      variant="outlined"
      color="secondary"
      onChange={(e) => setBphone(e.target.value)}
/>
<br/>
<br/>
<TextField
      id="outlined-basic"
      label="מייל"
      type="email"
      value={Bemail}
      variant="outlined"
      color="secondary"
      onChange={(e) => setBemail(e.target.value)}
/>
<br/>
<br/>
<Button
    variant="contained"
    color="secondary"
    onClick={()=> SaveChanges(Bname, Baddress, Bphone, Bemail)}>
    עדכן
</Button>
</>
)}
)
)
export default EditBusinessDetails

// export default BusinessDetails


// export function FormDialog() {
//     const EditBusinessDetails =(observer(()=>{
//     const [Bname, setBname] = useState(AdminEdit.name);
//     const [Baddress, setBaddress] = useState(AdminEdit.address);
//     const [Bphone, setBphone] = useState(AdminEdit.phone);
//     const [Bemail, setBemail] = useState(AdminEdit.email);
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const formJson = Object.fromEntries(formData.entries());
//             const email = formJson.email;
//             console.log(email);
//             handleClose();
//           },
//         }}
//       >
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We
//             will send updates occasionally.
//           </DialogContentText>
//           <TextField
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
//         </DialogContent>
//         <DialogActions>
          
//           <Button onClick={handleClose}>ביטול</Button>
//           <Button onClick={()=> SaveChanges(Bname, Baddress, Bphone, Bemail, "aaa")}>עדכן</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// })
//     )}