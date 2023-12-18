import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Lista({ nome, imagemPerfil, imagemPublicação, descricao, curtidas }) {

  const condicaoCurtida = curtidas > 0 ? "flex" : "none"

  return (
    <View style={styles.container}>
      <View style={styles.viewPerfil}>
        <Image source={{ uri: imagemPerfil }} style={styles.fotoPerfil} />
        <Text style={styles.nome}>{nome}</Text>
      </View>

      <Image resizeMode="cover" source={{ uri: imagemPublicação }} style={styles.fotoPubli} />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
            <Image source={require("../img/like.png")} style={styles.like}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require("../img/send.png")} style={styles.like}/>
        </TouchableOpacity>
      </View>

      <View style={styles.viewCurtidas}>
          <Text style={{...styles.curtida, display: condicaoCurtida }}>{curtidas} curtidas</Text>
      </View>

      <View style={styles.viewRodape}>
            <Text style={styles.nomeRodape}>
                {nome}
            </Text>
            <Text style={styles.descricaoRodape}>
                {descricao}
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPerfil:{
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15
  },
  nome: {
    fontSize: 20,
    textAlign: "left",
    color: "#000000"
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  fotoPubli: {
    flex: 1,
    height: 400,
    alignItems: "center"
  },
  areaBtn:{
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10
  },
  like:{
    width: 33,
    height: 33
  },
  viewRodape:{
    flexDirection: "row",
    alignItems: "center",
  },
  nomeRodape:{
    paddingRight: 15,
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 10

  },
  descricaoRodape:{
    fontSize: 15,
    color: "#000"
  },
  viewCurtidas:{
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:10
  }
  ,
  curtida:{
    fontSize: 15,
    fontWeight: "bold",
  }
});
