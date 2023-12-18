import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";

export default function AsyncStorage(){

    const [ input, setInput ] = useState("")
    const [ nome, setNome ] = useState("João Paulo")

    return(
        <View style={styles.container}>
            <TextInput 
            value={input}
            onChangeText={(texto) => setInput(texto)}
            style={styles.input}
            underlineColorAndroid="transparent"
            />

            <TouchableOpacity>
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
        width:40,
        height: 35,
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    nome: {
        fontSize: 20
    }
})