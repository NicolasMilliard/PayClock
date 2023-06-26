import { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  darkMode: boolean;
  text: string;
}

const PausedTitle: FC<Props> = ({ darkMode, text }) => {
  return <Text style={[styles.title, darkMode ? styles.darkTitle : styles.lightTitle]}>{text}</Text>;
};

export default PausedTitle;
