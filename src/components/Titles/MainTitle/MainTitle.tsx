import { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  text: string;
}

const MainTitle: FC<Props> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default MainTitle;
