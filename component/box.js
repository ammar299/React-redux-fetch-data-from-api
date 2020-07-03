// import React from 'react';
// import {StyleSheet,View,Text,Button,TouchableOpacity} from "react-native" ;

// class Box extends React.Component {
//     render() {
//         return (
//             <View >

//                     <View style={{
//                     backgroundColor:`${this.props.color}`,
//                     }}
//                     className="box">

//                     <TouchableOpacity
//                     style={{fontSize: 20, backgroundColor: `${this.props.color}`}}
//                     onPress={()=>{this.props.handleClick()}}
//                     >
//                     <Text>click here</Text>
//                     </TouchableOpacity>

//                     {console.log("props handle click here",this.props.handleClick)}
//                     {console.log("background color",this.props.color)}
//                      </View>

//                 </View>
//         )
//     }
// }

// export default Box;

import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-search-bar';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  SearchFilterFunction(text) {
    const newData = this.props.payload.filter(function (item) {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      console.log('item data', itemData);
      const textData = text.toUpperCase();
      console.log('text data', textData);
      console.log('check same ', itemData.indexOf(textData));
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
    search = (text) => {
      console.log(text);
    };
    clear = () => {
      this.search.clear();
    };
  }

  render() {
    this.props.payload.map((data, index) => {
      console.log('payload', data.name);
    });
    var list = [];
    for (var i = 0; i < this.props.payload.length; i++) {
      list.push(
        <View key={i}>
          <Text> {this.props.payload[i].name} </Text>
        </View>,
      );

      console.log('list', list);
      let apiList = null;
      apiList = (
        <View>
          <View>
            <FlatList inverted /> {list}{' '}
          </View>{' '}
        </View>
      );
    }
    // var list = [];
    // for(var i=0; i<this.props.payload.length; i++){
    //     console.log("namessssssssssssssss",this.props.payload[i].name)
    //     list.push(
    //       <View key = {i}>
    //         <View>
    //           <Text>
    //           {this.props.payload[i].name}
    //           {console.log("here is something",this.props.payload[i].name)}
    //           </Text>
    //         </View>
    //       </View>
    //     )
    //     return (
    //       <View>
    //         <View>
    //         <FlatList
    //           // inverted
    //           data={ this.props.payload[i].name}
    //           renderItem={({item}) => <Text >{item.key}</Text>}
    //         />
    //         </View>

    //         { list }
    //       </View>
    //     )
    //   }

    return (
      <View>
        <View>
          <Text>
            {' '}
            {this.props.handleClick}{' '}
            {console.log(
              'fetching data of users from api',
              this.props.handleClick,
            )}{' '}
          </Text>{' '}
          <TouchableOpacity
            style={{
              fontSize: 20,
              backgroundColor: 'yellow',
            }}
            onPress={() => {
              this.props.handleClick();
            }}>
            <Text> click here </Text>{' '}
          </TouchableOpacity>{' '}
          {this.props.payload.length === 10 ? (
            <SearchBar
              round
              searchIcon={{
                size: 24,
              }}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              onClear={(text) => this.SearchFilterFunction('')}
              placeholder="Type Here..."
              value={this.state['dataSource']}
            />
          ) : null}
          {console.log(
            'searchinggggggggggggggggggggggggggggggggggggg',
            this.state.dataSource,
          )}{' '}
          {console.log(
            'searching....................................',
            this.props.namess,
          )}{' '}
          {this.props.payload.length === 10
            ? this.props.payload.map((data, index) => (
                <FlatList
                  key={index}
                  data={[
                    {
                      key: data.name,
                    },
                  ]}
                  renderItem={({item}) => <Text> {item.key} </Text>}
                />
              ))
            : null}
          {/* <FlatList
                                data={this.state.dataSource}
                                ItemSeparatorComponent={this.ListViewItemSeparator}
                                //Item Separator View
                                renderItem={({ item }) => (
                                    // Single Comes here which will be repeatative for the FlatListItems
                                    <Text style={styles.textStyle}>{item.title}</Text>
                                )}
                                enableEmptySections={true}
                                style={{ marginTop: 10 }}
                                keyExtractor={(item, index) => index.toString()}
                                /> */}
          {console.log('props handle click here', this.props.handleClick)}{' '}
          {console.log('pay load', this.props.payload.length)}{' '}
        </View>
      </View>
    );
  }
}

export default Box;
