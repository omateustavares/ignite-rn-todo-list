import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    position: "relative",
    flexDirection: "row",
    marginTop: -39,
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
    color: "#F2F2F2",
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
});
