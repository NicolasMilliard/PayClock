import { FC } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  darkMode: boolean;
  text: string;
}

const MainTitle: FC<Props> = ({ darkMode, text }) => {
  return (
    <Text testID="title" style={[styles.title, darkMode ? styles.darkTitle : styles.lightTitle]}>
      {text}
    </Text>
  );
};

export default MainTitle;
