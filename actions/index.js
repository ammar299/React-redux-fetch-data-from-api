// import axios from "axios";

// export function loadColor(){
//     return(dispatch)=>{
//         return axios.get("http://www.colr.org/json/color/random").then((response)=>{
//             console.log("response here",response.data)
//             dispatch(changeColor("#"+response.data.new_color));
//             console.log("api color","#"+response.data.new_color);
//             console.log("action.index")
//         })
//     }
// }
// console.log("changecolor", changeColor)

// export function changeColor(color){
    
//     return{
//         type:"CHANGE_COLOR",
//         color:color
//     }
// }

import axios from "axios";

export function fetchUsers(){
    return(dispatch)=>{
        return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log("response here",response.data)
            dispatch(create_action(response.data));
            console.log("users",response.data[0]["name"],response.data[1]["name"],response.data[2]["name"],response.data[3]["name"],response.data[4]["name"],response.data[5]["name"],response.data[6]["name"],response.data[7]["name"],response.data[8]["name"],response.data[9]["name"]);
            console.log("action.index");
              for(var i=0; i<this.props.payload.length; i++){
            
                 {this.props.payload[i]["name"]}
               {console.log("testing dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",this.props.payload[i]["name"])}
              }

        }
        )
        
    }
}

const SOME_ACTION = "SOME_ACTION";

export function create_action(data,i){
    console.log("data from an api is here", data[0]["name"])
    return{
        type: SOME_ACTION,
        payload: data,
        namess: i
    }
    
}
