import React from "react"
import { observer } from "mobx-react"
import IsEditDetails from "./IsEditDetails"

const AdminHome = (observer(() => {

  return (
    <>
      <IsEditDetails/>     
    </>
  )
}))

export default AdminHome