import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import trashIcon from "../../assets/icons/trash/trash.png";
import { TaskProps } from "../../interface/task";
import { useTask } from "../../hooks/useTask";

interface TaskItemProps {
  index: number;
  item: TaskProps;
}

export function TaskItem({ index, item }: TaskItemProps) {
  const { removeTask, taskDone } = useTask();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.taskButton}
        onPress={() => taskDone(item.id)}
      >
        <View style={item.done ? styles.taskChecked : styles.taskCheck}>
          {item.done && <Icon name="check" size={12} color="#fff" />}
        </View>
        <View>
          <Text style={item.done ? styles.taskTextDone : styles.taskText}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTrash}
        onPress={() => removeTask(item.id)}
      >
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
