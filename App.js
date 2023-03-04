import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      resultado: 0
    };

    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
    this.resetar = this.resetar.bind(this);  
  }

  incrementar(){
    this.setState({
      resultado: this.state.resultado + 1
    });
  }

  decrementar(){
    if(this.state.resultado > 0){
      this.setState({
        resultado: this.state.resultado - 1
      })
    } else{
      alert("Impossível decrementar pois não há pessoas.")
    }
  }

  resetar(){
    this.setState({
      resultado: 0
    })
  }
  render(){
    return (
      <View style={{ alignItems: 'center',marginTop: 25 }}>
        <Text style={{ fontWeight: 'bold',fontSize: 25 }}>Contador de pessoas</Text>

        <Text style={{ fontWeight: 'bold',fontSize: 50, color: '#FF0000', padding: 30, marginTop: 10, border: 'solid 	#C0C0C0'}}>{this.state.resultado}</Text>

        <View style={styles.buttons}>
          <Button title="+" onPress={this.incrementar} color='#32CD32' ></Button>
        </View>

        <View style={styles.buttons}>
          <Button title="-" onPress={this.decrementar} color='#B22222'></Button>
        </View>

        <View style={styles.buttons}>
          <Button title="Reset" onPress = {this.resetar} color='#0000CD'></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    width: 100,
    marginTop: 5
  }
})