import { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  text: string;
}

const PausedTitle: FC<Props> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default PausedTitle;
