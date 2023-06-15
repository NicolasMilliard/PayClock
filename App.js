import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Button from "./src/components/Button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>To start, enter your annual income</Text>
      <TextInput style={styles.input}>$50'000</TextInput>
      <Button text="Start working" imageSource={require("./assets/icons/button/start.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dceaee",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 32,
    color: "#23262e",
  },
  input: {
    backgroundColor: "#cfe5eb",
    color: "#23262e",
    borderRadius: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
