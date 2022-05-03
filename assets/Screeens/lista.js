import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';

export default function Lista({ navigation }) {
  const contatinhos = [
    { nome: 'Contatinho 1', fone: '99999-9999' },
    { nome: 'Contatinho 2', fone: '99999-9999' },
    { nome: 'Contatinho 3', fone: '99999-9999' },
  ];
  const Contato = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 56,
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
          alignItems: 'center',
          paddingHorizontal: 16
        }}>
        <Text style={{ flex: 2 }}>{item.nome}</Text>
        <Text style={{ flex: 1 }}>{item.fone}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex :1}}>
    <View style={{flex :1}}>
       <View style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          backgroundColor: 'blueviolet',
          height: 56,
          alignItems: 'center'
        }}>
          <Text
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
            }}>
            @Contatinhos
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
          <Text style={{color: 'white'}}>SAIR</Text>
          </Pressable>
      </View>
      <FlatList data={contatinhos} renderItem={Contato} />
      <Pressable 
      style={{position: 'absolute', bottom: 16, right: 16,
      height: 48, width: 48, backgroundColor: 'gray', 
      borderRadius: 30, justifyContent: 'center', 
      alignItems: 'center'
      }}
      onPress={() => navigation.navigate('cadastro')}>
        <Text style={{color: 'white', fontSize: 24}}>+</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}
