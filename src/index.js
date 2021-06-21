// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// const initialState = {
//     age:20
// };
// // const reducer = (state=initialState, action) => {
// //     const newState = {...state};
// //     switch(action.type){
// //         case 'AGE_UP': 
// //             newState.age += action.value;
// //             break;
// //     return newState;
// // };
// const reducer = (state=initialState, action) => {
//     const newState = {...state};
//     switch(action.type){
//         case 'AGE_UP': 
//           return {
//               ...state,
//               age : state.age + action.value
//           }
        
//         case 'AGE_DOWN': 
//         return {
//             ...state,
//             age : state.age - action.value
//           }          
//      }
//      return state;
// };
// const store = createStore(reducer);
// ReactDOM.render(
// <Provider store={store}>
//   <App />
// </Provider>, document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from "./components/reducer/reducer"
import Abc from './components/Abc';


const store = createStore(reducer);

{/* doubt in below line */}

// store.dispatch({type: "CHANGE_NAME"})
// // Store.dispatch({type: "RESET"})

// store.subscribe(()=>{
//   // const receivedData = store.getState();
//   // console.log(receivedData);
//   console.log("state changes"+ JSON.stringify(store.getState()));
// })

// console.log("inital calling, and get all state value from store");
// console.log("final state" + JSON.stringify(store.getState()));


ReactDOM.render(
  <React.StrictMode>

{/* doubt in below line */}
    <Provider store={store}> 
      <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
