import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"

export default function AprendendoAsyncStorage(){

    const [ input, setInput ] = useState("")
    const [ nome, setNome ] = useState("João Paulo")

    function gravaNome(valor){
        setNome(valor)
        alert("Salvo com sucesso!")
        Keyboard.dismiss();
        return;
    }

    // ComponentDidMount - Quando o componente é montado em tela
    useEffect(() => {
        async function buscaNome(){
            await AsyncStorage.getItem('nome').then((valor) => setNome(valor)) // Vai verificar se existe algum nome no AsyncStorage, e se tiver vai armazenar no setNome mesmo que a tela tenha sido recarregada e etc
        }
        buscaNome()
    },[]);

    // ComponentDidUpdate - monitora toda vez que um state é atualizado
    useEffect(() => {
       async function salvaNome(){
         try {
            await AsyncStorage.setItem('nome', nome) // Vai criar um state chamado nome que vai armazenar o nome do meu useState
         } catch (error) {
            alert("Houve o error: " + error)
         }
       } 
       salvaNome()
    });


    return(
        <View style={styles.container}>
            <TextInput 
            value={input}
            onChangeText={(texto) => setInput(texto)}
            style={styles.input}
            underlineColorAndroid="transparent"
            />

            <TouchableOpacity onPress={() => gravaNome(input)}>
                <Text style={styles.botao}>+</Text>
            </TouchableOpacity>

            <Text style={styles.nome}>{nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: 30,
        gap: 15
    }
    ,input:{
        borderBottomWidth: 1,
        width: "90%",
        fontSize: 20,
        paddingBottom: 5
    },
    botao: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    nome: {
        fontSize: 25
    }
})