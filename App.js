import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 18, }}>
      <View style={{ height: 50, width: 50, borderRadius: 10, backgroundColor: "green" }}></View>
      <View style={{ height: 50, width: 50, borderRadius: 10, backgroundColor: "red" }}></View>
      <View style={{ height: 50, width: 50, borderRadius: 10, backgroundColor: "yellow" }}></View>
      <View style={{ height: 50, width: 50, borderRadius: 10, backgroundColor: "blue" }}></View>
    </View>
  );
}
