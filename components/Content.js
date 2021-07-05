import React, { Component } from 'react';
import Operators from './Operators';
import Number from './Numbers';
import { RFValue } from "react-native-responsive-fontsize";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums:[',',0,"+/-",1,2,3,4,5,6,7,8,9],
      operators:["bksp", '/', '*', '-', '+', '=']
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Number val="7" func={this.props.func}/>
          <Number val="8" func={this.props.func}/>
          <Number val="9" func={this.props.func}/>
          <Operators val="C" func={this.props.func}/>
        </View>
        <View style={styles.row}>
          <Number val="4" func={this.props.func}/>
          <Number val="5" func={this.props.func}/>
          <Number val="6" func={this.props.func}/>
          <Operators val="/" func={this.props.func}/>
        </View>
        <View style={styles.row}>
          <Number val="1" func={this.props.func}/>
          <Number val="2" func={this.props.func}/>
          <Number val="3" func={this.props.func}/>
          <Operators val="*" func={this.props.func}/>
        </View>
        <View style={styles.row}>
          <Number val="-1" func={this.props.func}/>
          <Number val="0" func={this.props.func}/>
          <Number val=',' func={this.props.func}/>
          <Operators val="+" func={this.props.func}/>
        </View>
        <View style={styles.row}>
          <Operators val="√x" func={this.props.func}/>
          <Operators val="x2" func={this.props.func}/>
          <Operators val="-" func={this.props.func}/>
          <Operators val="=" func={this.props.func}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor:"#333333"
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#333333"
  },

});

export default Content;