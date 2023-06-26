import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    height: 60,
    paddingLeft: 40,
    paddingRight: 40,
  },
  lightButton: {
    backgroundColor: "#23262e",
  },
  darkButton: {
    backgroundColor: "#dceaee",
  },
  buttonText: {
    marginLeft: 12,
  },
  lightButtonText: {
    color: "#dceaee",
  },
  darkButtonText: {
    color: "#23262e",
  },
});

export default styles;
