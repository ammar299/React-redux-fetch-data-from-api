// import React from 'react';
// import {StyleSheet,View,Text} from "react-native" ;
// import {connect} from "react-redux";
// import * as actionCreators from "../actions/index.js";
// import Box from "../component/box.js";
// class BoxCon extends React.Component{
//     render(){
//         console.log("load color",this.props.color)
//         return(
//             <View>
//             <Box handleClick={this.props.loadColor} color={this.props.color}></Box>
//             {console.log("loadColor box con", this.props.loadColor)}
//             {console.log("Color box con", this.props.color)}
//             </View>
//         )
//     }
// }


// const mapStateToProps=(state)=>{
//     return state
// };
// // const mapDispatchToProps = (dispatch, props) => ({
// //   dispatchCall: payload => dispatch(actionName(payload)),
// // });
// const mapDispatchToProps = (dispatch) => {
//     return {
//       changeColor: () => dispatch({ type: "CHANGE_COLOR" }),
//        }; };
  

// export default connect (mapStateToProps, actionCreators)(BoxCon);

import React from 'react';
import {StyleSheet,View,Text} from "react-native" ;
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
import Box from "../component/box.js";
class BoxCon extends React.Component{
    render(){
        return(
            <View>
            <Box handleClick={this.props.fetchUsers} payload={this.props.payload} namess={this.props.namess}></Box>
            
            {console.log("fetching users",this.props.fetchUsers)}
            {console.log("payload users",this.props.payload)}
            </View>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};
// const mapDispatchToProps = (dispatch, props) => ({
//   dispatchCall: payload => dispatch(actionName(payload)),
// });
// const mapDispatchToProps = (dispatch) => {
//     return {
//       changeColor: () => dispatch({ type: "CHANGE_COLOR" }),
//        }; };
  

export default connect (mapStateToProps, actionCreators)(BoxCon);