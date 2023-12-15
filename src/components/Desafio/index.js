import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, TextInput, View, Text, Switch, TouchableOpacity } from "react-native";

export default function Desafio() {
  const [nome, setNome] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [estudante, setEstudante] = useState(false);
  const [limite, setLimite] = useState(500.0);

  const arraySexo = [
    { nome: "Masculino", valor: 1 },
    { nome: "Feminino", valor: 2 },
  ];

  const sexoSelecionado = sexo > 0 ? arraySexo[sexo - 1].nome : "";
  const limiteSelecionado = limite.toFixed(2).replace(".", ",");
  const estudanteSelecionado = estudante ? "Sim" : "Não"

  function criaConta(){
    if(nome == null || sexo == null){
        return alert("Você precisa preencher os campos para criar uma conta!")
    }else {
        return alert(`
        Conta criada com sucesso! 
        \n
        Seus dados:
        \n
        Nome: ${nome} \n
        Sexo: ${sexoSelecionado} \n
        Limite: R$${limiteSelecionado} \n
        Estudante: ${estudanteSelecionado} \n
        `)
    }
  }
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Banco React</Text>
      <TextInput
        placeholder="Digite seu nome"
        onChangeText={(nome) => setNome(nome)}
        style={estilos.inputNome}
      />
      <Picker
        style={estilos.inputSexo}
        selectedValue={sexo}
        onValueChange={(itemValor) => setSexo(itemValor)}
      >
        <Picker.Item enabled={false} value={0} label="Selecione um sexo" />
        {arraySexo.map((sexo) => (
          <Picker.Item key={sexo.valor} label={sexo.nome} value={sexo.valor} />
        ))}
      </Picker>

      <Text style={{ fontSize: 16 }}>Selecione o limite desejado</Text>
      <Slider
        minimumValue={100}
        maximumValue={2000}
        onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
        minimumTrackTintColor="black"
        thumbTintColor="black"
        value={500.0}
        style={estilos.slider}
      />
      <Text style={{ color: "green", fontWeight: "bold", fontSize: 20 }}>
        R$ {limiteSelecionado}
      </Text>

      <Text style={{ fontSize: 16 }}>Você é um estudante?</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <Switch
          value={estudante}
          onValueChange={(valor) => setEstudante(valor)}
        />
        <Text>{estudanteSelecionado}</Text>
      </View>
        <TouchableOpacity style={estilos.botao} onPress={criaConta}>
            <Text style={{color:"white", textTransform: "uppercase", fontWeight: "bold"}}>Abrir conta</Text>
        </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  titulo: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputNome: {
    backgroundColor: "#f1f1f1",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "90%",
    height: 60,
    paddingLeft: 18,
  },
  inputSexo: {
    backgroundColor: "#f1f1f1",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "90%",
    height: 60,
    paddingLeft: 18,
  },
  slider: {
    width: "90%",
  },
  botao:{
    backgroundColor: "black",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  }
});
