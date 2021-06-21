import React from 'react'
import {connect} from "react-redux"
import Usersa from "./Usersa"

function Users(props) {
  return (
    <div>
      USER NAMA IS {props.myname}
      <Usersa />
      {/* <button onClick={()=>updateNameClick()}>Update Name</button> */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myname: state.name
  }
}

export default connect(mapStateToProps, "")(Users)
