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
    backgroundColor: "#cfe5eb",
    fontSize: 20,
    color: "#23262e",
    borderRadius: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },
  settingsWrapper: {
    position: "absolute",
    top: 64,
    right: 24,
  },
});

export default styles;
