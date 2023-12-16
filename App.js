import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Instagram from "./src/components/Instagram";

export default function App() {
  
  return (
    <View style={styles.container}>
       <Instagram />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })