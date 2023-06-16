import { FC, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setStartTimerValue } from "../../redux/startTimerSlice";
import styles from "../../styles/index";

import Button from "../../components/Button/Button";

const TimerScreen: FC = () => {
  const income = useSelector((state: RootState) => state.income);
  const startTime = useSelector((state: RootState) => state.startTimer);
  const dispatch = useDispatch();

  const [incomePerSecond, setIncomePerSecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const [earned, setEarned] = useState(0);

  const formatIncome = () => {
    const yearlyIncomeToIncomePerSecond = income.value / (52 * 35 * 3600);
    const roundIncomePerSecond = (yearlyIncomeToIncomePerSecond * 100) / 100;
    setIncomePerSecond(roundIncomePerSecond);
  };

  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (startTime.value === 0) {
      dispatch(setStartTimerValue(Date.now()));
    }
    formatIncome();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime.value) / 1000);
      setDuration(elapsedSeconds);
      setEarned((prevEarned) => prevEarned + incomePerSecond);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [incomePerSecond]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={localStyles.text}>You've been working for</Text>
        <Text style={localStyles.title}>{formatDuration(duration)}</Text>
      </View>
      <View style={localStyles.wrapper}>
        <Text style={localStyles.text}>So far, you've earned</Text>
        <Text style={localStyles.title}>${earned.toFixed(2)}</Text>
      </View>
      <Button text="Pause" imageSource={require("../../../assets/icons/button/pause.png")} customFunc="" />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  wrapper: {
    marginTop: 64,
  },
  text: {
    color: "#96abb1",
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    color: "#23262e",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TimerScreen;
