import { FlatList, Text } from "react-native";
import { TaskItem } from "../TaskItem";

export function TasksList() {
  const tasks = ["Mateus", "Tavares"];
  return (
    <FlatList
      data={tasks}
      // keyExtractor={item}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <>
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </>
        );
      }}
    />
  );
}
