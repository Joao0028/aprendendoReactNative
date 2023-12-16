import { StyleSheet, Text, View } from "react-native";

export default function Lista({nome}){
    return(
        <View style={styles.container}>
            <Text>{nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 30
    }
})