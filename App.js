import { StyleSheet, View } from "react-native";
import AsyncStorage from "./src/components/AsyncStorage";

export default function App() {
  
  return (
    <View style={styles.container}>
       <AsyncStorage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })