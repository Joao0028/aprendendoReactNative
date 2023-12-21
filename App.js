import { StyleSheet, View } from "react-native";
import AprendendoAsyncStorage from "./src/components/AsyncStorage";
import PraticandoAsyncStorage from "./src/components/AsyncStorage/PraticandoAsyncStorage";
import AprendendoModal from "./src/components/AprendendoModal";



export default function App() {
  
  return (
    <View style={styles.container}>
       <AprendendoModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  })