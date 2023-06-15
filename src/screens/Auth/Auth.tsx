import { FC } from "react";
import { StyleSheet, Alert, TextInput, View } from "react-native";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setIncomeValue } from "../../redux/incomeSlice";

const Auth: FC = () => {
  const income = useSelector((state: RootState) => state.income);
  const dispatch = useDispatch();

  const updateIncomeValue = (text: string) => {
    const parsedValue = parseFloat(text);

    if (!isNaN(parsedValue)) {
      dispatch(setIncomeValue(parsedValue));
    }
  };

  const handleAnnualIncome = () => {
    if (income.value === 0) {
      Alert.alert("Annual Income", "Please provide your annual income", [{ text: "OK" }]);
    } else {
      Alert.alert("Annual Income", `The value is $${income.value}`, [{ text: "OK" }]);
    }
  };

  return (
    <>
      <Title text="To start, enter your annual income" />
      <TextInput
        style={styles.input}
        placeholder="$50000"
        keyboardType="numbers-and-punctuation"
        textAlign="center"
        onChangeText={(text) => updateIncomeValue(text)}
      />
      <Button
        text="Start working"
        imageSource={require("../../../assets/icons/button/start.png")}
        customFunc={handleAnnualIncome}
      />
    </>
  );
};

const styles = StyleSheet.create({
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

export default Auth;
