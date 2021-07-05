import React, { Component } from 'react';
import { RFValue } from "react-native-responsive-fontsize";
import { View, Text, StyleSheet } from 'react-native';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  
  render() {
    // let fontMagnitude = RFValue(100);
    // if(this.props.val.length >= 6)
    //   fontMagnitude = RFValue(this.props.val.length *5);
      
    
    return (
        <View style={{flex:1,backgroundColor:"#000000"}}>
          <Text  allowFontScaling adjustsFontSizeToFit={true} numberOfLines={1} minimumFontScale={0.01} style={styles.text} >
                  {this.props.val}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { 
      fontSize: RFValue(100),
      fontFamily: 'monospace',
      justifyContent:'center',
      textAlign: "right",
     // marginLeft: RFValue(10),
      color: "#ffffff"
     }
});

export default Display;