import { FC, useState } from "react";
import { StyleSheet, SafeAreaView, View, Alert, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setIncomeValue } from "../../redux/incomeSlice";
import { useNavigation } from "@react-navigation/native";
import { type StackNavigation } from "../../../App";
import styles from "../../styles/index";

import MainTitle from "../../components/Titles/MainTitle/MainTitle";
import Button from "../../components/Buttons/Button/Button";

const AuthScreen: FC = () => {
  const navigation = useNavigation<StackNavigation>();
  const darkMode = useSelector(({ darkTheme }: RootState) => darkTheme);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const updateIncomeValue = (text: string) => {
    const parsedValue = parseFloat(text);

    if (!isNaN(parsedValue)) {
      dispatch(setIncomeValue(parsedValue));
      navigation.navigate("Timer");
    }
  };

  const handleAnnualIncome = () => {
    if (inputValue === "") {
      Alert.alert("Annual Income", "Please provide your annual income.", [{ text: "OK" }]);
    } else {
      updateIncomeValue(inputValue);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainTitle darkMode={darkMode.value} text="To start, enter your annual income" />
      <TextInput
        style={styles.input}
        placeholder="50000"
        keyboardType="numbers-and-punctuation"
        textAlign="center"
        onChangeText={setInputValue}
      />
      <View style={localStyles.buttonWrapper}>
        <Button
          darkMode={darkMode.value}
          text="Start working"
          imageSource={
            darkMode.value
              ? require("../../../assets/images/icons/dark/start/start.png")
              : require("../../../assets/images/icons/light/start/start.png")
          }
          customFunc={handleAnnualIncome}
        />
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 80,
  },
});

export default AuthScreen;
