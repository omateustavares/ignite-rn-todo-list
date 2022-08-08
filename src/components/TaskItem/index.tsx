import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import trashIcon from "../../assets/icons/trash/trash.png";

export function TaskItem() {
  return (
    <View style={styles.container}>
      <View style={styles.taskCheck}>
        <Icon name="check" size={12} color="#fff" />
      </View>
      <Text style={styles.taskText}>Xico</Text>
      <TouchableOpacity>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
