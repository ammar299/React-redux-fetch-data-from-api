// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   View,
// } from 'react-native';

// class App extends Component {
//   state = {
//     count: 0
//   }

//   onPress = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   decreaseCount = () => {
//     this.setState ({ count: this.state.count - 1
//     })
//   }

//  render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//          style={styles.button}
//          onPress={this.onPress}
//         >
//          <Text>Increase</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//          style={styles.button}
//          onPress={this.decreaseCount}>
//          <Text>Decrease</Text>
//         </TouchableOpacity>

//         <View style={styles.countContainer}>
//           <Text>
//             You clicked { this.state.count } times
//           </Text>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     marginBottom: 10
//   }
// })

// export default App;











// import React from "react";
// import {
// StyleSheet,
// View,
// ActivityIndicator,
// FlatList,
// Text,
// TouchableOpacity
// } from "react-native";

// export default class Source extends React.Component {
// static navigationOptions = ({ navigation }) => {
// return {
//   title: "Source Listing",
//   headerStyle: {backgroundColor: "#fff"},
//   headerTitleStyle: {textAlign: "center",flex: 1}
//  };
// };
// constructor(props) {
//  super(props);
//  this.state = {
//    loading: true,
//    dataSource:[]
//   };
// }
// componentDidMount(){
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then((responseJson)=> {
//   this.setState({
//    loading: false,
//    dataSource: responseJson
//   })
// })
// .catch(error=>console.log(error)) //to catch the errors if any
// }
// FlatListItemSeparator = () => {
// return (
//   <View style={{
//      height: .5,
//      width:"100%",
//      backgroundColor:"rgba(0,0,0,0.5)",
// }}
// />
// );
// }
// renderItem=(data)=>
// <TouchableOpacity style={styles.list}>
// <Text style={styles.lightText}>{data.item.name}</Text>
// <Text style={styles.lightText}>{data.item.email}</Text>
// <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
// render(){
//  if(this.state.loading){
//   return( 
//     <View style={styles.loader}> 
//       <ActivityIndicator size="large" color="#0c9"/>
//     </View>
// )}
// return(
//  <View style={styles.container}>
//  <FlatList
//     data= {this.state.dataSource}
//     ItemSeparatorComponent = {this.FlatListItemSeparator}
//     renderItem= {item=> this.renderItem(item)}
//     keyExtractor= {item=>item.id.toString()}
//  />
// </View>
// )}
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//    },
//   loader:{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff"
//    },
//   list:{
//     paddingVertical: 4,
//     margin: 5,
//     backgroundColor: "#fff"
//    }
// });

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import * as thunk from 'redux-thunk';
import {Provider} from "react-redux";
// import {thunk} from "redux-thunk";
import reducers from "./reducers/index.js";
import Boxcon from './container/box-container.js';


let store = createStore(reducers, applyMiddleware(thunk.default))

export default function App() {
  return (
    <Provider store={store}><View style={styles.container}><Boxcon /></View></Provider>
    // <View style={styles.container}>
    // <Boxcon></Boxcon>
    // </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
