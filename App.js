import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import UtilizandoOPicker from "./src/components/UtilizandoOPicker";

export default function App() {
  
  return (
    <View style={styles.container}>
       <UtilizandoOPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  })