import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>To start, enter your annual income</Text>
      <TextInput style={styles.input}>$50'000</TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start working!</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#23262e",
    borderRadius: 16,
    marginTop: 80,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonText: {
    color: "#dceaee",
  },
});
