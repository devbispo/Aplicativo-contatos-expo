import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Cadastro({navigation}) {
  return (
    <View>
      <Text
        style={{
          paddingLeft: 16,
          backgroundColor: 'blueviolet',
          color: 'white',
          height: 80,
          fontSize: 24,
          paddingVertical: 26,
        }}>
        Novo Contatinho
      </Text>
      <View style={{paddingHorizontal: 16}}>
        <Text style={styles.rotulo}>Nome</Text>
        <TextInput style={styles.input}
          keyboardType="name-phone-pad"
        />
        <Text style={styles.rotulo}>Telefone</Text>
        <TextInput style={styles.input}
          keyboardType="number-pad"
        />
        	<View style={{paddingTop: 24}}>
          <Button title="Salvar" color='gray' onPress={()=> navigation.navigate ('lista')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  rotulo: { 
    color: 'gray', 
    paddingTop: 16 
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
