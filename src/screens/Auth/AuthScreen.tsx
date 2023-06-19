import { FC, useState } from "react";
import { StyleSheet, SafeAreaView, View, Alert, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { setIncomeValue } from "../../redux/incomeSlice";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "../../styles/index";

import MainTitle from "../../components/Titles/MainTitle/MainTitle";
import Button from "../../components/Buttons/Button/Button";

// Define the type for the navigation prop
type TimerScreenNavigationProp = NavigationProp<{ Timer: undefined }>;

const AuthScreen: FC = () => {
  const navigation = useNavigation<TimerScreenNavigationProp>();
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
      Alert.alert("Annual Income", "Please provide your annual income", [{ text: "OK" }]);
    } else {
      updateIncomeValue(inputValue);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainTitle text="To start, enter your annual income" />
      <TextInput
        style={localStyles.input}
        placeholder="$50000"
        keyboardType="numbers-and-punctuation"
        textAlign="center"
        onChangeText={setInputValue}
      />
      <View style={localStyles.buttonWrapper}>
        <Button
          text="Start working"
          imageSource={require("../../../assets/icons/button/start/start.png")}
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
