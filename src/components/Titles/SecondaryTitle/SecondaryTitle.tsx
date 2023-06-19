import { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  text: string;
  isPaused: boolean;
}

const SecondaryTitle: FC<Props> = ({ text, isPaused }) => {
  return <Text style={[styles.title, isPaused && styles.pausedText]}>{text}</Text>;
};

export default SecondaryTitle;
