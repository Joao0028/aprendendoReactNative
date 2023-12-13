import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import BiscoitoDaSorte from "./src/components/BiscoitoDaSorte";

export default function App() {
  return (
    <View style={styles.container}>
       <BiscoitoDaSorte />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })