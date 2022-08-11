import { Text, View } from "react-native";
import { useTask } from "../../hooks/useTask";
import { TasksList } from "../TasksList";
import { styles } from "./styles";

export function Info() {
  const { tasks } = useTask();

  const taskCounterCriated = tasks.length;
  const taskCounterDone = tasks.filter((task) => task.done === true).length;

  return (
    <View style={styles.info}>
      <View style={styles.infoContent}>
        <Text style={{ color: "#4EA8DE", fontWeight: "bold" }}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {taskCounterCriated}
          </Text>
        </View>
      </View>

      <View style={styles.infoContent}>
        <Text style={{ color: "#8284FA", fontWeight: "bold" }}>Concluidas</Text>
        <View style={styles.counter}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {taskCounterDone}
          </Text>
        </View>
      </View>
    </View>
  );
}
