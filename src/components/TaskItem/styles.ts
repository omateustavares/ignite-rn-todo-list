import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    height: 64,
    backgroundColor: "#262626",
    marginBottom: 8,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 8,
    borderColor: "#333333",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
  },
  taskButton: {
    display: "flex",
    flexDirection: "row",
  },
  taskCheck: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskChecked: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskCheckedDone: {
    height: 18,
    width: 18,
    borderRadius: 4,
    backgroundColor: "#1DB863",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: "#FFF",
  },
  taskTextDone: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  buttonTrash: {
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    position: "absolute",
    marginRight: 10,
    width: 26,
    height: 26,
  },
});
