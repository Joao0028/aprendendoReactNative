import { View, Text, Image } from "react-native";

export default function Filme({props}){
    return <View>
        <Text>{props.nome}</Text>
        
        <Image style={{width: 200, height: 100}} source={{uri: props.foto}} />

        <Text>{props.sinopse}</Text>
    </View>
}