import React from "react"
import { observer } from "mobx-react"
import IsEditDetails from "../BussnesData/IsEditDetails"

const AdminHome = (observer(() => {

  return (
    <>
      <IsEditDetails/>  
      <h2>hello</h2>   
    </>
  )
}))

export default AdminHome