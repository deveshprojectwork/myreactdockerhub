import {CHANGE_NAME, MODIFY_CITY, RESET} from "../constants/constants"

export const initialState = {
  name: "Abhishek",
  city: "Mumbai"
}

 const reducer = (state= initialState, action)=> {
  console.log("STATE AND ACATION",state,action);
  // console.log(action.type)
  var name = "VIP"
  switch(action.type){   
    case CHANGE_NAME: 
    console.log(action.type, 44);
      return {
          ...state,
          name : (name==="VIP"?"SUCCESS":"FAILED")
      }
    case MODIFY_CITY: 
      return {
          ...state,
          city : action.value
      }
    
    case RESET: 
    return {
        ...state,
        name : ""
      }          
    }
  return state;
}

export default reducer