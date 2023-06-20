import { FC, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setIncomeValue } from "../../redux/incomeSlice";
import styles from "../../styles/index";

import IconTitle from "../../components/Titles/IconTitle/IconTitle";
import Button from "../../components/Buttons/Button/Button";

const SettingsScreen: FC = () => {
  const income = useSelector(({ income }: RootState) => income);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(income.value);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const saveIncome = () => {
    console.log(inputValue);
    dispatch(setIncomeValue(inputValue));
  };

  return (
    <SafeAreaView style={styles.container}>
      <IconTitle
        imageSource={require("../../../assets/icons/go_back/go_back.png")}
        customFunc={handleGoBack}
        text="Settings"
      />
      <View style={localStyles.wrapper}>
        <Text style={localStyles.labelText}>Annual income</Text>
        <TextInput
          style={styles.input}
          placeholder={income.value.toString()}
          keyboardType="numbers-and-punctuation"
          onChangeText={setInputValue}
        />
      </View>
      <View>
        <Button text="Save" imageSource={null} customFunc={saveIncome} />
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 32,
    alignItems: "center",
    marginLeft: 24,
    marginRight: 24,
  },
  labelText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
