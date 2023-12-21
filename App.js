import { StyleSheet, View } from "react-native";
import DesafioGasolina from "./src/components/DesafioGasolina";



export default function App() {
  
  return (
    <View style={styles.container}>
       <DesafioGasolina />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  })