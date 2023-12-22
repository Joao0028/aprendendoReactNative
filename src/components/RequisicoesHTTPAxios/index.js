import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import api from "./services/api";
import { useEffect, useState } from "react";
import Filme from "./Filme";

export default function RequisicoesHTTPAxios() {
  const [arrayApi, setArray] = useState([]);

  useEffect(() => {
    async function req() {
        try {
            const response = await api.get("r-api/?api=filmes");
            setArray(response.data); // O data é onde fica o conteúdo
          } catch (error) {
            console.error("Erro na requisição:", error);
          }
    }
    req();
  },[]);

  return (
    <View style={styles.container}>
      <FlatList
        data={arrayApi}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Filme props={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});


// {return(<View>
//     <Text>{item.nome}</Text>
//     <Image style={{width: 200, height: 100}} source={{uri: item.foto}} />
// </View>)}