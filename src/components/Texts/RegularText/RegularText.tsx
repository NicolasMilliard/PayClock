import { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  darkMode: boolean;
  text: string;
}

const RegularText: FC<Props> = ({ darkMode, text }) => {
  return <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>{text}</Text>;
};

export default RegularText;
