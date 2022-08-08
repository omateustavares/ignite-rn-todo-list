import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  form: {
    position: "relative",
    flexDirection: "row",
    marginTop: -25,
    marginLeft: 19,
    marginRight: 19,
  },
  input: {
    top: 1,
    flex: 1,
    borderRadius: 6,
    height: 66,
    padding: 16,
    backgroundColor: "#262626",
    marginRight: 12,
  },
  button: {
    backgroundColor: "#1E6F9F",
    height: 66,
    width: 66,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFF",
    fontSize: 24,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 19,
  },
  created: {
    alignItems: "center",
  },
  done: {},
  counter: {
    backgroundColor: "#333333",
    width: 40,
    height: 19,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
