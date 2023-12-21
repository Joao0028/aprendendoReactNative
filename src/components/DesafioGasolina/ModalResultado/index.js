import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import bombaGas from "../img/gas.png"

export default function ModalResultado({fechaModal, resultado, alcool, gasolina}){

    const alcoolConvertido = Number(alcool).toFixed(2).replace(".",",")
    const gasolinaConvertido = Number(gasolina).toFixed(2).replace(".",",")

    return <View style={estilos.container}>
        <Image source={bombaGas} />

        <Text style={estilos.titulo}>Compensa usar {resultado}</Text>
        <Text style={estilos.tituloPrecos}>Com os preços:</Text>

        <Text style={estilos.precos}>Álcool: R$ {alcoolConvertido}</Text>
        <Text style={estilos.precos}>Gasolina: R$ {gasolinaConvertido}</Text>

        <TouchableOpacity style={estilos.botao} onPress={fechaModal}>
            <Text style={{color: '#e53b3b', textAlign: "center", fontWeight: "bold", textTransform: "uppercase"}}>
                Calcular novamente
            </Text>
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#121212",
        justifyContent: "center",
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 25
    },
    titulo:{
        color: "#43e11d",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10
    },
    tituloPrecos:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    precos:{
        color: "white"
    },
    botao:{
        borderColor: "#e53b3b",
        borderWidth: 2,
        color: "#e53b3b",
        backgroundColor: "transparent",
        width: "80%",
        height: 60,
        justifyContent: "center",
        borderRadius: 8
    }
})