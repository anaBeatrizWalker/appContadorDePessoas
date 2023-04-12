import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App(){
  const [resultado, setResultado] = useState(0);

  function incrementar(){
    setResultado(resultado + 1);
  }

  function decrementar(){
    if(resultado > 0){
      setResultado(resultado - 1);
    } else{
      alert("Impossível decrementar pois não há pessoas.")
    }
  }

  function resetar(){
    setResultado(0);
  }

  return (
    <View style={{ alignItems: 'center',marginTop: 25 }}>
      <Text style={{ fontWeight: 'bold',fontSize: 25 }}>Contador de pessoas</Text>

      <Text style={{ fontWeight: 'bold',fontSize: 50, color: '#FF0000', padding: 30, marginTop: 10, border: 'solid 	#C0C0C0'}}>{resultado}</Text>

      <View style={styles.buttons}>
        <Button title="+" onPress={incrementar} color='#32CD32' ></Button>
      </View>

      <View style={styles.buttons}>
        <Button title="-" onPress={decrementar} color='#B22222'></Button>
      </View>

      <View style={styles.buttons}>
        <Button title="Reset" onPress={resetar} color='#0000CD'></Button>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  buttons: {
    width: 100,
    marginTop: 5
  }
})