import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#dceaee",
  },
  darkContainer: {
    backgroundColor: "#23262e",
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    borderRadius: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },
  lightInput: {
    backgroundColor: "#cfe5eb",
    color: "#23262e",
  },
  darkInput: {
    backgroundColor: "#3d424e",
    color: "#dceaee",
  },
  settingsWrapper: {
    position: "absolute",
    top: 64,
    right: 24,
  },
});

export default styles;
