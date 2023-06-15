import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, TextInput, View } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { setInputValue } from "./src/redux/store";

import Title from "./src/components/Title/Title";
import Button from "./src/components/Button/Button";

export default function App() {
  const inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  const handleAnnualIncome = () => {
    if (inputValue === "") {
      Alert.alert("Annual Income", "Please provide your annual income", [{ text: "OK" }]);
    } else {
      Alert.alert("Annual Income", `The value is ${inputValue}`, [{ text: "OK" }]);
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Title text="To start, enter your annual income" />
        <TextInput
          style={styles.input}
          placeholder="$50000"
          keyboardType="numbers-and-punctuation"
          textAlign="center"
          onChangeText={(text) => dispatch(setInputValue(text))}
        />
        <Button
          text="Start working"
          imageSource={require("./assets/icons/button/start.png")}
          customFunc={handleAnnualIncome}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dceaee",
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
});
