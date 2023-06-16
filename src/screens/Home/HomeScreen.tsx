import { FC } from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "../../styles/index";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

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
      <Title text="Let's start a new working day!" />
      <Button
        text="Start working"
        imageSource={require("../../../assets/icons/button/start.png")}
        customFunc={handleAnnualIncome}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
