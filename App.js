import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const pessoas = [
    {nome: "João" , idade: 17},
    {nome: "Paulo" , idade: 23},
    {nome: "Rosa" , idade: 64},
    {nome: "Diego" , idade: 28},
  ]
  return (
    <View style={styles.container}>
       <FlatList 
       data={pessoas}
       keyExtractor={(item) => item.nome}
       renderItem={({item}) => <Text>{item.nome}</Text>}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })