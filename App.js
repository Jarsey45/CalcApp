import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Display from "./components/Display";
import Content from "./components/Content";

export default class App extends React.Component {
  state= {
    value: "0",
    trueVal: 0
  }


  componentDidMount(){
    this.setState({
      value: "0",
      trueVal: 0
    })
  }

  updateDisplay = (el)=>{

    switch(el){
      case "=":
        this.setState(prevState => { 
          if(prevState.trueVal == '')
            return({value: "0", trueVal: 0 })

          if(isNaN(prevState.trueVal.slice(-1)) && prevState.trueVal.slice(-1) != ")")
            return({value: prevState.trueVal.slice(0,-1), trueVal: prevState.trueVal.slice(0,-1) })
            

          let evaluated = (eval(prevState.trueVal) % 1 == 0 ? eval(prevState.value) : eval(prevState.value).toFixed(3)) 
          return({value: evaluated, trueVal: eval(prevState.trueVal) })
        });
        break;
      case "x2":
        this.setState(prevState => { 
          
          return({value: `sqr(${prevState.value})`, trueVal: `sqr(${prevState.value})` })
        });
        break;
      case "√x":
          this.setState(prevState => { 
            let output = `sqrt(${prevState.trueVal})`;
            if(!sqrt(prevState.trueVal))
              output = 'undefined';


            return({value: output, trueVal: output })
          });
          break;
      case "-1":
          this.setState(prevState => { 
            
            return({value: `-(${prevState.value})`, trueVal: `-(${prevState.value})` })
          });
          break;
      case "C":
        this.setState(prevState => ({
          value: "0",
          trueVal: 0
        }))
        break;
      case ',':
        this.setState(prevState => ({
          value: prevState.trueVal + '.',
          trueVal: prevState.trueVal + '.'
        }))
        break;
      default:
        this.setState(prevState => {
          if(prevState.trueVal == 0 && !isNaN(el))
            return ({value: el, trueVal: el});
          else
            return ({value: prevState.trueVal + el, trueVal: prevState.trueVal + el});
        })
        break;
    }

    

  }

  render() {
    //console.log(this.state);
    const {value} = this.state;
    return (
      <View style={styles.container}>     
        <Display val={value}/>
        <Content func={this.updateDisplay}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    fontFamily:'monospace'
  }, 
 
});


function sqr(x){return Math.pow(x,2)};
function sqrt(n){
  let evaluated = eval(n);

  if(evaluated>=0) 
    return Math.sqrt(n);
   else 
    return false;}
