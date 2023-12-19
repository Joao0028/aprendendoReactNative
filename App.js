import { StyleSheet, View } from "react-native";
import AprendendoAsyncStorage from "./src/components/AsyncStorage";


export default function App() {
  
  return (
    <View style={styles.container}>
       <AprendendoAsyncStorage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })