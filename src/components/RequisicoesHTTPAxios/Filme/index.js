import { View, Text, Image, StyleSheet } from "react-native";

export default function Filme({props}){
    return <View style={estilos.container}>
        <Text style={estilos.titulo}>{props.nome}</Text>
        
        <Image style={{width: "100%", height: 200, borderRadius: 18}} source={{uri: props.foto}} />

        <Text style={estilos.sinopse}>{props.sinopse}</Text>
    </View>
}

const estilos = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20,
        gap: 8
    },
    titulo:{
        fontWeight: "bold",
        fontSize: 20
    },
    sinopse:{
        fontSize: 12,
        textAlign: "justify",
    }
})