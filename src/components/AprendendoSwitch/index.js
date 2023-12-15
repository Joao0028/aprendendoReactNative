import { useState } from "react";
import { View, Switch, Text } from "react-native";

export default function AprendendoSwitch() {
  const [status, setSwitch] = useState(false);
  return (
    <View>
      <Switch
        value={status}
        onValueChange={(valorSwitch) => setSwitch(valorSwitch)}
        // thumbColor={"red"} // Muda a cor da bolinha
      />
      <Text style={{ textAlign: "center", fontSize: 20, textTransform: 'uppercase' }}>
        {status ? "Verdadeiro" : "Falso"}
      </Text>
    </View>
  );
}
