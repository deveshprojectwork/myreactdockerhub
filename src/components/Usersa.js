import React from 'react'
import {connect} from "react-redux"

function Usersa(props) {
  function updateNameClick(city){
    props.updateName(city);
  }
  return (
    <div>
      USER NAMA IS {props.city}:{props.name}
      <button onClick={()=>updateNameClick("Paris")}>Update Name</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: state.name,
    city:state.city
  }
}

const mapDispachToProps = dispatch =>{
  return {
    updateName: (city) => dispatch({
        type: "MODIFY_CITY", 
        value:city
      })
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Usersa)
