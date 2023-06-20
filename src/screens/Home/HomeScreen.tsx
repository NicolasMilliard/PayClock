import { FC } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigation } from "@react-navigation/native";
import { type StackNavigation } from "../../../App";
import styles from "../../styles/index";

import MainTitle from "../../components/Titles/MainTitle/MainTitle";
import Button from "../../components/Buttons/Button/Button";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

const HomeScreen: FC = () => {
  const income = useSelector((state: RootState) => state.income);
  const navigation = useNavigation<StackNavigation>();

  const handleAnnualIncome = () => {
    if (income.value > 0) {
      navigation.navigate("Timer");
    }
  };

  const navigateToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView style={styles.centeredContainer}>
      <View style={localStyles.settingsWrapper}>
        <SecondaryButton
          imageSource={require("../../../assets/icons/settings/settings.png")}
          customFunc={navigateToSettings}
        />
      </View>
      <View style={localStyles.titleWrapper}>
        <MainTitle text="Let's start a new working day!" />
      </View>
      <View style={localStyles.buttonWrapper}>
        <Button
          text="Start working"
          imageSource={require("../../../assets/icons/start/start.png")}
          customFunc={handleAnnualIncome}
        />
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  settingsWrapper: {
    position: "absolute",
    top: 64,
    right: 24,
  },
  titleWrapper: {
    marginLeft: 24,
    marginRight: 24,
  },
  buttonWrapper: {
    marginTop: 80,
  },
});

export default HomeScreen;
