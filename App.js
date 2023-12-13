import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import BiscoitoDaSorte from "./src/components/BiscoitoDaSorte";
import Cronometro from "./src/components/Cronometro";

export default function App() {
  return (
    <View style={styles.container}>
       <Cronometro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })