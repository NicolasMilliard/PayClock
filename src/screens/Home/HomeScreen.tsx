import { FC } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "../../styles/index";

import MainTitle from "../../components/Titles/MainTitle/MainTitle";
import Button from "../../components/Buttons/Button/Button";

// Define the type for the navigation prop
type TimerScreenNavigationProp = NavigationProp<{ Timer: undefined }>;

const HomeScreen: FC = () => {
  const income = useSelector((state: RootState) => state.income);
  const navigation = useNavigation<TimerScreenNavigationProp>();

  const handleAnnualIncome = () => {
    if (income.value > 0) {
      navigation.navigate("Timer");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainTitle text="Let's start a new working day!" />
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
});

export default HomeScreen;
