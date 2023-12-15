import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import AprendendoSwitch from "./src/components/AprendendoSwitch";

export default function App() {
  
  return (
    <View style={styles.container}>
       <AprendendoSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })