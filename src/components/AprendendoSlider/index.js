import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export default function AprendendoSlider() {
  const [valor, setValor] = useState(50);

  return (
    <View style={estilos.container}>
      <Slider
        minimumValue={0} // Valor minimo
        maximumValue={100} // Valor máximo
        onValueChange={(valorSelecionado) =>
          setValor(valorSelecionado.toFixed(1))
        }
        value={valor} // Valor atual
        minimumTrackTintColor="#00ff00" // Cor da linha para trás
        maximumTrackTintColor="#fffaaa" // Cor da linha para frente
      />
      <Text style={{ textAlign: "center", fontSize: 30 }}>{valor}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
