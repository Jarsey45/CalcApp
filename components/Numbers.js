import React, { Component } from 'react';
import { RFValue } from "react-native-responsive-fontsize";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class Number extends Component{
  constructor(props){
    super(props);

    this.state={};
  }

  onPress = () => {
    this.props.func(this.props.val);
  };

  render(){
    return (
      <View style={styles.container} >
        <TouchableOpacity style={styles.button} onPress={this.onPress}> 
          <Text style={styles.text}> {this.props.val}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'25%',
    backgroundColor:"#202020"
  },

  text: { 
    fontFamily:'monospace', 
    fontSize: RFValue(48),
    color: "#ffffff"
   },

  button: {
    flex:1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: "#1a1a1a",
    padding: RFValue(5)
  }
});

export default Number;