import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Keyboard, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

export default function PraticandoAsyncStorage(){
    const [input, setInput] = useState("")
    const [palavra, setPalavra] = useState("João Teste")

    function mandaPalavra(palavra){
        alert("Palavra enviada com sucesso!")
        setPalavra(palavra)
        Keyboard.dismiss();
        return;
    }

    useEffect(() => {
        async function pegaPalavra(){
            await AsyncStorage.getItem("palavra").then((palavra) => setPalavra(palavra))
        }
        pegaPalavra()
    },[])

    useEffect(()=>{
        async function salvaPalavra(){
            try {
                await AsyncStorage.setItem('palavra', palavra)
            } catch (error) {
                alert("Houve o erro: " + error)
            }
        }
        salvaPalavra()
    })

   


    return <View style={{flex: 1, alignItems: "center", marginTop: 20, gap: 12}}>
        
        <Text style={{fontWeight: "bold", textTransform: "uppercase", fontSize: 16}}>Consolidando conhecimentos</Text>
        
        <TextInput 
            value={input} 
            onChangeText={(texto) => setInput(texto)}
            style={{borderColor: "#f1f1f1", borderWidth: 2, fontSize: 18, padding: 10, width: "90%",}}
            selectionColor="black"
        />

        <TouchableOpacity onPress={() => mandaPalavra(input)}>
            <Text style={{fontWeight: "bold", color: "white", backgroundColor: "black", paddingHorizontal: 50, paddingVertical: 15, textTransform: "uppercase", fontSize: 12, marginVertical: 15}}>Adicionar palavra</Text>
        </TouchableOpacity>

        <Text>
            {palavra}
        </Text>
    </View>
}