import { useState } from "react";
import { Button, StyleSheet, Text, View, Modal } from "react-native";

export default function AprendendoModal(){

    const [modal, setModal] = useState(false)

    function entrar(){
        setModal(!modal)
        return;
    }

    return <View style={styles.container}>
        <Button title="Entrar" color="black" onPress={entrar}/>

        <Modal animation="slide" visible={modal}>
            <View style={{backgroundColor: "#292929", flex: 1, justifyContent: "center", alignItems: "center", gap: 30}}>
                <Text style={{color: "#fff", fontSize:22 }}>Seja bem-vindo!</Text>

                <Button title="Fechar" color="black" onPress={entrar}/>
            </View>
        </Modal>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd"
    }
})