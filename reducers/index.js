// let defaultState={
//     color:"yellow"
// }
// console.log("default state" , defaultState)
// const mainReducer=(state=defaultState,action)=>{
//     if(action.type==="CHANGE_COLOR"){
//         return{
//             ...state,           
//         }
//     } else{
//         return{
//             ...state
//         }
//     }
// }

// export default mainReducer;




// let defaultState={
//     color:"yellow"
// }
// import {FETCH_USERS} from "../actions/action";

const initialState = {
    payload: [],
    search: '',
    namess: '',
}

const mainReducer=(state = initialState, action)=>{
    console.log("initial state",initialState)
    console.log("action in reducer ",action["payload"])
    
    if(action.type==="SOME_ACTION"){
        console.log("action type",action.type)
        return{
            ...state,
             payload: action["payload"],
        }
        
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;