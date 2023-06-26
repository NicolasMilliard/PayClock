import { FC, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, Switch, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setIncomeValue } from "../../redux/incomeSlice";
import { setDarkThemeValue } from "../../redux/themeSlice";
import { type StackNavigation } from "../../../App";
import styles from "../../styles/index";

import IconTitle from "../../components/Titles/IconTitle/IconTitle";
import Button from "../../components/Buttons/Button/Button";
import LabelText from "../../components/Texts/LabelText/LabelText";

const SettingsScreen: FC = () => {
  const income = useSelector(({ income }: RootState) => income);
  const darkMode = useSelector(({ darkTheme }: RootState) => darkTheme);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigation>();

  const [inputValue, setInputValue] = useState(income.value.toString());
  const [isDark, setIsDark] = useState<boolean>(darkMode.value);

  const toggleSwitch = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    dispatch(setDarkThemeValue(newTheme));
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const updateIncomeValue = () => {
    const parsedValue = parseFloat(inputValue);

    if (!isNaN(parsedValue)) {
      dispatch(setIncomeValue(parsedValue));
      Alert.alert("Annual Income", "The new annual income is saved.", [{ text: "OK" }]);
    }
  };

  return (
    <SafeAreaView style={[styles.container, darkMode.value === false ? styles.lightContainer : styles.darkContainer]}>
      <IconTitle
        darkMode={darkMode.value}
        imageSource={
          darkMode.value
            ? require("../../../assets/images/icons/dark/go_back/go_back.png")
            : require("../../../assets/images/icons/light/go_back/go_back.png")
        }
        customFunc={handleGoBack}
        text="Settings"
      />
      <View style={localStyles.wrapper}>
        {/* Annual income */}
        <LabelText darkMode={darkMode.value} text="Annual income" />
        <TextInput
          style={[styles.input, darkMode.value ? styles.darkInput : styles.lightInput]}
          placeholder={income.value.toString()}
          placeholderTextColor={darkMode.value ? "#676f83" : "#8f96a7"}
          keyboardType="numbers-and-punctuation"
          onChangeText={setInputValue}
        />
      </View>
      <View style={localStyles.wrapper}>
        {/* Theme */}
        <LabelText darkMode={darkMode.value} text="Dark mode" />
        <Switch value={isDark} onValueChange={toggleSwitch} />
      </View>
      <View style={localStyles.buttonWrapper}>
        <Button
          darkMode={darkMode.value}
          text="Save"
          imageSource={
            darkMode.value
              ? require("../../../assets/images/icons/dark/save/save.png")
              : require("../../../assets/images/icons/light/save/save.png")
          }
          customFunc={updateIncomeValue}
        />
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 32,
    alignItems: "center",
    marginTop: 32,
    marginHorizontal: 24,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
  },
});

export default SettingsScreen;
