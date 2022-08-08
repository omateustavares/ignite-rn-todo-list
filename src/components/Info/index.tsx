import { Text, View } from "react-native";
import { styles } from "./styles";

export function Info() {
  return (
    <View style={styles.info}>
      <View>
        <Text style={{ color: "#4EA8DE", fontWeight: "bold" }}>
          Criadas
          <View style={styles.counter}>2</View>
        </Text>
      </View>

      <View>
        <Text style={{ color: "#8284FA", fontWeight: "bold" }}>
          Concluidas
          <View style={styles.counter}>2</View>
        </Text>
      </View>
    </View>
  );
}
