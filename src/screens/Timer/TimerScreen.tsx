import { FC, useEffect, useState, useRef, MutableRefObject } from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setStartTimerValue } from "../../redux/startTimerSlice";
import styles from "../../styles/index";

import Button from "../../components/Button/Button";

const TimerScreen: FC = () => {
  const income = useSelector(({ income }: RootState) => income);
  const startTimer = useSelector(({ startTimer }: RootState) => startTimer);
  const dispatch = useDispatch();

  const [incomePerSecond, setIncomePerSecond] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [earned, setEarned] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef: MutableRefObject<number | null> = useRef<number | null>(null);
  const elapsedDurationRef = useRef<number>(0);

  const formatIncome = () => {
    const yearlyIncomeToIncomePerSecond = income.value / (52 * 35 * 3600);
    const roundIncomePerSecond = (yearlyIncomeToIncomePerSecond * 100) / 100;
    setIncomePerSecond(roundIncomePerSecond);
  };

  const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const pauseTimer = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const reStartTimer = () => {
    setIsPaused(false);
    elapsedDurationRef.current = duration;
    dispatch(setStartTimerValue(Date.now()));
  };

  useEffect(() => {
    if (startTimer.value === 0) {
      dispatch(setStartTimerValue(Date.now()));
    } else if (!isPaused) {
      elapsedDurationRef.current = duration;
    }
    formatIncome();
  }, []);

  const resetTimer = () => {
    setIsPaused(true);
    setDuration(0);
    setEarned(0);
    dispatch(setStartTimerValue(0));
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
        setEarned((prevEarned) => prevEarned + incomePerSecond);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, incomePerSecond]);

  return (
    <SafeAreaView style={styles.container}>
      {isPaused && (
        <View style={localStyles.pausedWrapper}>
          <Text style={localStyles.pausedTitle}>Timer is paused.</Text>
        </View>
      )}
      <View>
        <Text style={localStyles.text}>You've been working for</Text>
        <Text style={[localStyles.title, isPaused && localStyles.pausedText]}>{formatDuration(duration)}</Text>
      </View>
      <View style={localStyles.wrapper}>
        <Text style={localStyles.text}>So far, you've earned</Text>
        <Text style={[localStyles.title, isPaused && localStyles.pausedText]}>${earned.toFixed(2)}</Text>
      </View>
      <View style={localStyles.buttonsWrapper}>
        {isPaused ? (
          <Button
            text="Resume"
            imageSource={require("../../../assets/icons/button/resume.png")}
            customFunc={reStartTimer}
          />
        ) : (
          <Button
            text="Pause"
            imageSource={require("../../../assets/icons/button/pause.png")}
            customFunc={pauseTimer}
          />
        )}
        <TouchableOpacity style={localStyles.button} onPress={resetTimer}>
          <Image source={require("../../../assets/icons/button/reset.png")} />
        </TouchableOpacity>
      </View>
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
  pausedText: {
    color: "#96abb1",
  },
  pausedWrapper: {
    marginBottom: 32,
  },
  pausedTitle: {
    color: "#23262e",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 80,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cfe5eb",
    borderRadius: 16,
    width: 60,
    height: 60,
  },
});

export default TimerScreen;
