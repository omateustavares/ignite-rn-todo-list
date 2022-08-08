import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import { TasksList } from "../../components/TasksList";
import { TodoInput } from "../../components/TodoInput";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoInput />
      <Info />
      <TasksList />
    </View>
  );
}
