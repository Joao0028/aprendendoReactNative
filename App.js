import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("João Paulo Silva");

  function entrar() {
    return setNome("Seja bem-vindo!!!");
  }

  return (
    <View style={{backgroundColor:'#121212', flex: 1}}>
      <View style={{height: 50, backgroundColor: '#f1f1f1'}}></View>
      <View style={{flex: 1, backgroundColor: 'white'}}></View>
      <View style={{height: 50, backgroundColor: '#f1f1f1'}}></View>
    </View>
  );
}
