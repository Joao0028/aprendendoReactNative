import { useState } from "react";
import Lista from "./Lista";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default function Instagram() {
  const [pessoas, setPessoas] = useState([
    {
      id: "1",
      nome: "Lucas Silva",
      descricao: "Mais um dia de muitos bugs :)",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto1.png",
      likeada: false,
      likers: 0,
    },
    {
      id: "2",
      nome: "Matheus",
      descricao: "Isso sim é ser raiz!!!!!",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
      likeada: false,
      likers: 0,
    },
    {
      id: "3",
      nome: "Jose Augusto",
      descricao: "Bora trabalhar Haha",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto3.png",
      likeada: false,
      likers: 3,
    },
    {
      id: "4",
      nome: "Gustavo Henrique",
      descricao: "Isso sim que é TI!",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto4.png",
      likeada: false,
      likers: 1,
    },
    {
      id: "5",
      nome: "Guilherme",
      descricao: "Boa tarde galera do insta...",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto5.png",
      likeada: false,
      likers: 32,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
          source={require("./img/logo.png")} 
          style={styles.logo} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("./img/send.png")} 
          style={styles.send} 
          />
        </TouchableOpacity>
      </View>

      <FlatList 
      showsVerticalScrollIndicator={false} 
      data={pessoas} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => 
      <Lista data={item} 
      nome={item.nome} 
      descricao={item.descricao}
      imagemPerfil={item.imgperfil}
      imagemPublicação={item.imgPublicacao}/>} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:4,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: "#fff",
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    borderBottomColor: "#f1f1f1",
    //elevation: 1,
  },
  logo: {},
  send: {
    width: 23,
    height: 23,
  },
});
