import { StyleSheet, View } from "react-native";
import DesafioGasolina from "./src/components/DesafioGasolina";
import RequisicoesHTTPAxios from "./src/components/RequisicoesHTTPAxios";



export default function App() {
  
  return (
    <View style={styles.container}>
       <RequisicoesHTTPAxios />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  })