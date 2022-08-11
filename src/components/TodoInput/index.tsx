import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTask } from "../../hooks/useTask";
import { styles } from "./styles";

export function TodoInput() {
  const { addTask } = useTask();
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    task !== "" && addTask(task);
    setTask("");
  }

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
        returnKeyType="send"
        selectionColor="#808080"
        onSubmitEditing={handleAddNewTask}
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
        <Text style={styles.textButton}>⊕</Text>
      </TouchableOpacity>
    </View>
  );
}
