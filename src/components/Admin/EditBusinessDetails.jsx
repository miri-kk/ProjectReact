import { Button, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import AdminEdit from "./AdminEdit";
import SaveChanges from "./SaveChanges‏.jsx";

const EditBusinessDetails =(observer(()=>{
    const [Bname, setBname] = useState(AdminEdit.name);
    const [Baddress, setBaddress] = useState(AdminEdit.address);
    const [Bphone, setBphone] = useState(AdminEdit.phone);
    const [Bemail, setBemail] = useState(AdminEdit.email);

useEffect(() => {
    AdminEdit.setDefaultValues(Bname, Baddress, Bphone, Bemail);
  }, [Bname, Baddress, Bphone, Bemail]);

return (
<>
<h2>עריכת פרטים</h2>

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
    onClick={()=> SaveChanges(Bname, Baddress, Bphone, Bemail, "aaa")}>
    עדכן
</Button>
</>
)}
)
)
export default EditBusinessDetails