import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import UtilizandoOPicker from "./src/components/UtilizandoOPicker";
import AprendendoSlider from "./src/components/AprendendoSlider";

export default function App() {
  
  return (
    <View style={styles.container}>
       <AprendendoSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  })