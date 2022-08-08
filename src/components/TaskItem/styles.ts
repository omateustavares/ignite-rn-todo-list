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
});
