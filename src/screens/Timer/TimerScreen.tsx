import { FC, useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "../../styles/index";

import Button from "../../components/Button/Button";

const TimerScreen: FC = () => {
  const income = useSelector((state: RootState) => state.income);
  const [hourlyIncome, setHourlyIncome] = useState(0);

  const formatIncome = () => {
    const yearlyIncomeToHourlyIncome = income.value / (52 * 35);
    const roundHourlyIncome = Math.round(yearlyIncomeToHourlyIncome * 100) / 100;
    setHourlyIncome(roundHourlyIncome);
  };

  useEffect(() => {
    formatIncome();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>${hourlyIncome}</Text>
      <Text>You've been working for</Text>
      <Text>01:17:28</Text>
      <Text>So far, you've earned</Text>
      <Text>$35.17</Text>
      <Button text="Pause" imageSource={require("../../../assets/icons/button/pause.png")} customFunc="" />
    </SafeAreaView>
  );
};

export default TimerScreen;
