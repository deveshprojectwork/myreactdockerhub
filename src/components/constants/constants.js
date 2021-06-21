//export default CHANGE_NAME = "CHANGE_NAME", should not be default
export const CHANGE_NAME = "CHANGE_NAME"
export const MODIFY_CITY = "MODIFY_CITY"
export const RESET = "RESET"
export const REMOVE = "REMOVE"

export const removeItem = id =>{
  return {type:REMOVE, payload:{id}};
}