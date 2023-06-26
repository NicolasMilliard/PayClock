import { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  darkMode: boolean;
  text: string;
  isPaused: boolean;
}

const SecondaryTitle: FC<Props> = ({ darkMode, text, isPaused }) => {
  const titleStyle = darkMode
    ? isPaused
      ? styles.darkTitlePaused
      : styles.darkTitle
    : isPaused
    ? styles.lightTitlePaused
    : styles.lightTitle;

  return <Text style={[styles.title, titleStyle]}>{text}</Text>;
};

export default SecondaryTitle;
