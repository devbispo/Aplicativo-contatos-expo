import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.conteudo}>
      <Text style={styles.logo}>
        @
      </Text>
      <Text style={styles.titulo}>
        Contatinhos
      </Text>
      <Text style={styles.rotulo}>Email</Text>
      <TextInput style={styles.input}
        keyboardType="email-address"
      />
      <Text style={styles.rotulo}>Senha</Text>
      <TextInput style={styles.input}
        secureTextEntry={true}
      />
      <View style={{paddingTop: 24}}>
      <Button title="Entrar" color='gray' onPress={() => navigation.navigate ('lista')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blueviolet',
    paddingHorizontal: 16,
  },
  logo: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  rotulo: { 
    color: 'lightgrey', 
    paddingTop: 16 
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

