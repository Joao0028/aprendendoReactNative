import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function UtilizandoOPicker() {
 
    const [ pizza, setPizza ] = useState(0)
 
    const [ arrayPizzas, setArray ] = useState([
        {nome: "Calabresa", valor: "49,99"},
        {nome: "Portuguesa", valor: "59,99"},
        {nome: "Mussarela", valor: "39,99"},
        {nome: "Brigadeiro", valor: "49,99"},
    ])

    let mapPizzas = arrayPizzas.map((pizza, index) => {
       return <Picker.Item key={index} value={index} label={pizza.nome}/>
    })


    return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu de Pizza</Text>

      <Picker
      selectedValue={pizza}
      onValueChange={(itemValor, itemIndex) => setPizza(itemValor)} 
      style={{width: 310}}>
        {mapPizzas}
      </Picker>

      <Text style={styles.pizzas}>Você escolheu: Pizza de {arrayPizzas[pizza].nome}</Text>
      <Text style={styles.valor}>R$ {arrayPizzas[pizza].valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    gap: 15,
  },
  logo: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  pizzas: {
    fontSize: 16,
  },
  valor: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
});
