import { StyleSheet, View } from "react-native";
import AprendendoAsyncStorage from "./src/components/AsyncStorage";
import PraticandoAsyncStorage from "./src/components/AsyncStorage/PraticandoAsyncStorage";


export default function App() {
  
  return (
    <View style={styles.container}>
       <PraticandoAsyncStorage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })