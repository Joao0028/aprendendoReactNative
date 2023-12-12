import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [ conteudoInput, setInput ] = useState("")

  if(conteudoInput === ""){
    return setInput("Seja bem-vindo!!!")
  }

  function pegaNome(nome){
    return setInput("Seja bem-vindo " + nome + "!")
  }

  return (
    <View style={styles.container}>
        <TextInput 
        placeholder="Digite seu nome"
        onChangeText={(texto) => pegaNome(texto)}
        underlineColorAndroid="transparent"
        style={styles.input}
        />

        <Text style={styles.texto}>
          {conteudoInput}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 18,
    fontSize: 20,
    padding: 10,
    borderRadius: 20,
    paddingLeft: 20
    },
    texto: {
      textAlign: "center",
      fontSize: 18
    }
  })