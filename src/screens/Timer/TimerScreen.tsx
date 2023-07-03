import { FC, useEffect, useState, useRef, MutableRefObject } from "react";
import { AppState, AppStateStatus, StyleSheet, SafeAreaView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setStartTimerValue } from "../../redux/startTimerSlice";
import { startTimer as startTimerUtils, formatIncome, formatDuration } from "../../utils/Timer";
import { useNavigation } from "@react-navigation/native";
import { type StackNavigation } from "../../../App";
import styles from "../../styles/index";

import Button from "../../components/Buttons/Button/Button";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import SecondaryTitle from "../../components/Titles/SecondaryTitle/SecondaryTitle";
import PausedTitle from "../../components/Titles/PausedTitle/PausedTitle";
import RegularText from "../../components/Texts/RegularText/RegularText";

const TimerScreen: FC = () => {
  const income = useSelector(({ income }: RootState) => income);
  const startTimer = useSelector(({ startTimer }: RootState) => startTimer);
  const darkMode = useSelector(({ darkTheme }: RootState) => darkTheme);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigation>();

  // References
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const intervalRef: MutableRefObject<number | null> = useRef<number | null>(null);
  // State variables
  const [incomePerSecond, setIncomePerSecond] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [backgroundStartTimer, setBackgroundStartTimer] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [earned, setEarned] = useState<number>(0);

  const navigateToSettings = () => {
    navigation.navigate("Settings");
  };

  useEffect(() => {
    startTimerUtils(startTimer.value);

    // Attribute the income to incomePerSecond
    setIncomePerSecond(formatIncome(income.value));

    // If the timer is not paused
    if (!isPaused) {
      // App state change event listener
      const subscription = AppState.addEventListener("change", (nextAppState) => {
        console.log("AppState updating...");
        if (appState.current.match(/active/) && (nextAppState === "inactive" || nextAppState === "background")) {
          console.log("AppState will be inactive or background");
          // App is active and will be inactive or background
          const currentDate = Date.now();
          setBackgroundStartTimer(currentDate);
          console.log("backgroundStartTimer is updated to: " + backgroundStartTimer);
        } else if (appState.current.match(/background|inactive/) && nextAppState === "active") {
          // App is background and will be active
          const backgroundDurationInSeconds = (Date.now() - backgroundStartTimer) / 1000;
          console.log(backgroundDurationInSeconds + "s in background");
          setDuration((prevDuration) => prevDuration + backgroundDurationInSeconds);
          setEarned((prevEarned) => prevEarned + incomePerSecond * backgroundDurationInSeconds);
          setBackgroundStartTimer(0);
        }
        appState.current = nextAppState;
      });

      return () => {
        // Cleanup the event listener
        subscription.remove();
      };
    }
  }, [backgroundStartTimer]);

  useEffect(() => {
    // Run the timer (update duration and earned) when isPaused is false
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

  // To pause the timer, interval is cleared
  const pauseTimer = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Reset keep isPaused status
  const resetTimer = () => {
    setIsPaused(false);
    setDuration(0);
    setEarned(0);
    dispatch(setStartTimerValue(Date.now()));
  };

  return (
    <SafeAreaView
      style={[styles.centeredContainer, darkMode.value === false ? styles.lightContainer : styles.darkContainer]}
    >
      <View style={styles.settingsWrapper}>
        <SecondaryButton
          darkMode={darkMode.value}
          imageSource={
            darkMode.value
              ? require("../../../assets/images/icons/dark/settings/settings.png")
              : require("../../../assets/images/icons/light/settings/settings.png")
          }
          customFunc={navigateToSettings}
        />
      </View>
      {isPaused && (
        <View style={localStyles.pausedWrapper}>
          <PausedTitle darkMode={darkMode.value} text="Timer is paused." />
        </View>
      )}
      <View>
        <RegularText darkMode={darkMode.value} text="You've been working for" />
        <SecondaryTitle darkMode={darkMode.value} text={formatDuration(duration)} isPaused={isPaused} />
      </View>
      <View style={localStyles.wrapper}>
        <RegularText darkMode={darkMode.value} text="So far, you've earned" />
        <SecondaryTitle darkMode={darkMode.value} text={`$${earned.toFixed(2)}`} isPaused={isPaused} />
      </View>
      <View style={localStyles.buttonsWrapper}>
        {isPaused ? (
          // <TimerButton darkMode={darkMode.value} isPaused={isPaused} customFunc={() => setIsPaused(false)} />
          <Button
            darkMode={darkMode.value}
            text="Resume"
            imageSource={
              darkMode.value
                ? require("../../../assets/images/icons/dark/resume/resume.png")
                : require("../../../assets/images/icons/light/resume/resume.png")
            }
            customFunc={() => setIsPaused(false)}
          />
        ) : (
          <Button
            darkMode={darkMode.value}
            text="Pause"
            imageSource={
              darkMode.value
                ? require("../../../assets/images/icons/dark/pause/pause.png")
                : require("../../../assets/images/icons/light/pause/pause.png")
            }
            customFunc={pauseTimer}
          />
        )}
        <SecondaryButton
          darkMode={darkMode.value}
          imageSource={
            darkMode.value
              ? require("../../../assets/images/icons/dark/reset/reset.png")
              : require("../../../assets/images/icons/light/reset/reset.png")
          }
          customFunc={resetTimer}
        />
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  wrapper: {
    marginTop: 64,
  },
  pausedWrapper: {
    marginBottom: 32,
  },
  buttonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 80,
  },
});

export default TimerScreen;
