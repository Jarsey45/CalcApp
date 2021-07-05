import React, { Component } from 'react';
import { RFValue } from "react-native-responsive-fontsize";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Operators extends Component {
  constructor(props){
    super(props);

    this.state={};
  }

  onPress = () => {
    this.props.func(this.props.val);
  };

  render(){
    return (
      <View style={styles.container}>
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
    justifyContent: "center",
    backgroundColor:"#333333"
  },

  text: { 
    fontFamily: 'monospace',
    justifyContent: 'center',
    fontSize: RFValue(48),
    color: "#ffffff"
   },

  button: {
    flex:1,
    alignItems:'center',
    justifyContent: "center",
    backgroundColor: "#222222",
    padding: RFValue(10)
  }
});

export default Operators;