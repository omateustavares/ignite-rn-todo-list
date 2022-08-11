import { FlatList, Image, Text, View } from "react-native";
import { useTask } from "../../hooks/useTask";
import { TaskItem } from "../TaskItem";
import document from "../../assets/icons/document/document.png";
import { styles } from "./styles";

export function TasksList() {
  const { tasks } = useTask();

  return tasks.length !== 0 ? (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return <TaskItem item={item} index={index} />;
      }}
    />
  ) : (
    <View style={styles.container}>
      <Image style={styles.image} source={document} />
      <Text style={{ fontWeight: "bold", color: "#808080" }}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={{ color: "#808080" }}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
