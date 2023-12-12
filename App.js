import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("João Paulo Silva");

  function entrar() {
    return setNome("Seja bem-vindo!!!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Button title="Entrar" onPress={entrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  nome: {
    textAlign: "center",
    margin: 15,
    color: "#313131",
    fontSize: 18,
  },
});
