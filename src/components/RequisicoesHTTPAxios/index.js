import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import api from "./services/api";
import { useEffect, useState } from "react";
import Filme from "./Filme";

export default function RequisicoesHTTPAxios() {
  const [arrayApi, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function req() {
      try {
        const response = await api.get("r-api/?api=filmes");
        setArray(response.data); // O data é onde fica o conteúdo
        setLoading(false);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
    req();
  }, []);

  if (loading === true) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Carregando...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={arrayApi}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Filme props={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});