import { FC, useState } from "react";
import { StyleSheet, SafeAreaView, Alert, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { setIncomeValue } from "../../redux/incomeSlice";
import styles from "../../styles/index";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const AuthScreen: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const updateIncomeValue = (text: string) => {
    const parsedValue = parseFloat(text);

    if (!isNaN(parsedValue)) {
      dispatch(setIncomeValue(parsedValue));
    }
  };

  const handleAnnualIncome = () => {
    if (inputValue === "") {
      Alert.alert("Annual Income", "Please provide your annual income", [{ text: "OK" }]);
    } else {
      updateIncomeValue(inputValue);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="To start, enter your annual income" />
      <TextInput
        style={localStyles.input}
        placeholder="$50000"
        keyboardType="numbers-and-punctuation"
        textAlign="center"
        onChangeText={setInputValue}
      />
      <Button
        text="Start working"
        imageSource={require("../../../assets/icons/button/start.png")}
        customFunc={handleAnnualIncome}
      />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
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

export default AuthScreen;
