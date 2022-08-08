import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>⊕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.created}>
          <Text>
            Criadas
            <View style={styles.counter}>
              <Text>2</Text>
            </View>
          </Text>
        </View>

        <View style={styles.done}>
          <Text>
            Concluidas
            <View style={styles.counter}>
              <Text>2</Text>
            </View>
          </Text>
        </View>
      </View>
    </View>
  );
}
