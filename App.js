import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import AprendendoSwitch from "./src/components/AprendendoSwitch";
import Desafio from "./src/components/Desafio";

export default function App() {
  
  return (
    <View style={styles.container}>
       <Desafio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })