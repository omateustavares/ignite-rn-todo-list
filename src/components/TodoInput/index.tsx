import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function TodoInput() {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
        selectionColor="#808080"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>⊕</Text>
      </TouchableOpacity>
    </View>
  );
}
